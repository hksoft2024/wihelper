import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, Fragment, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
	name?: string;
	onSearch: (value: string) => void;
	delay?: number;
	placeholder?: string;
	maxLength?: number;
	searchIconPosition?: "start" | "end";
	showClearIcon?: boolean;
	fontSize?: number;
};

const DebouncedSearchBox = ({
	name = "",
	onSearch,
	delay = 500,
	placeholder,
	maxLength,
	searchIconPosition = "end",
	showClearIcon,
	fontSize,
}: Props) => {
	const searchParams = useSearchParams();

	const initSearchValue = searchParams.get(name) ?? "";

	const [searchValue, setSearchValue] = useState(initSearchValue);

	const handleSearch = useDebouncedCallback((value: string) => {
		if (searchValue === initSearchValue) return;

		onSearch(value);
	}, delay);

	const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setSearchValue(value);
		handleSearch(value);
	};

	const handleClearSearchValue = () => {
		setSearchValue("");
		handleSearch("");
	};

	return (
		<TextField
			value={searchValue}
			onChange={handleChangeSearchValue}
			fullWidth
			placeholder={placeholder}
			slotProps={{
				input: {
					...(searchIconPosition == "start"
						? {
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon fontSize="small" />
									</InputAdornment>
								),
						  }
						: {}),
					endAdornment: (
						<Fragment>
							<InputAdornment position="end">
								{showClearIcon && !!searchValue && (
									<IconButton size="small" onClick={handleClearSearchValue}>
										<ClearIcon fontSize="small" />
									</IconButton>
								)}

								{searchIconPosition === "end" && (
									<SearchIcon fontSize="small" />
								)}
							</InputAdornment>
						</Fragment>
					),
				},
				htmlInput: { maxLength, sx: { fontSize } },
			}}
		/>
	);
};

export default DebouncedSearchBox;
