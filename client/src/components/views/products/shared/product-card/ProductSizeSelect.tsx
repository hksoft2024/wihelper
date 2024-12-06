import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import InputAdornment from "@mui/material/InputAdornment";
import inputBaseClasses from "@mui/material/InputBase/inputBaseClasses";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { MouseEvent, useEffect, useRef, useState } from "react";

type Props = {
	options: string[];
	value: string;
	onChange: (value: string) => void;
	isHoveredParent?: boolean;
};

const ProductSizeSelect = ({
	value,
	onChange,
	options,
	isHoveredParent,
}: Props) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
	const openMenu = !!menuAnchorEl;

	useEffect(() => {
		if (!isHoveredParent) {
			handleCloseMenu();
		}
	}, [isHoveredParent]);

	const handleToggleMenu = (event: MouseEvent<HTMLElement>) => {
		if (openMenu) {
			handleCloseMenu();
		} else {
			setMenuAnchorEl(event.currentTarget);
		}
	};

	function handleCloseMenu() {
		setMenuAnchorEl(null);
	}

	return (
		<Box>
			<OutlinedInput
				ref={inputRef}
				value={value}
				readOnly
				sx={{
					fontSize: 14,
					cursor: "pointer",
					[`.${inputBaseClasses.input}`]: {
						py: 1.6,
						cursor: "pointer",
						"::selection": {
							backgroundColor: "transparent",
						},
					},
				}}
				endAdornment={
					<InputAdornment position="end" sx={{ pointerEvents: "none" }}>
						<KeyboardArrowDownIcon />
					</InputAdornment>
				}
				onClick={handleToggleMenu}
			/>

			<Popper
				disablePortal
				open={openMenu}
				anchorEl={menuAnchorEl}
				transition
				placement="bottom"
				sx={{ width: inputRef.current?.offsetWidth, zIndex: 1 }}
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps}>
						<Paper elevation={2} sx={{ mt: 1 }}>
							<ClickAwayListener onClickAway={handleCloseMenu}>
								<List>
									{options.map((option, index) => (
										<MenuItem
											key={index}
											selected={option === value}
											onClick={() => onChange(option)}
											sx={{ fontSize: 14 }}
										>
											{option}
										</MenuItem>
									))}
								</List>
							</ClickAwayListener>
						</Paper>
					</Fade>
				)}
			</Popper>
		</Box>
	);
};

export default ProductSizeSelect;
