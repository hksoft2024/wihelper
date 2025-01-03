import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Breakpoint } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { Fragment, ReactNode } from "react";

type Props = {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
	title?: ReactNode;
	okText?: string;
	onOk?: () => void;
	cancelText?: string;
	renderHeader?: ReactNode;
	renderFooter?: ReactNode;
	hiddenFooter?: boolean;
	maxWidth?: Breakpoint;
	fullScreen?: boolean;
	hideOkButton?: boolean;
	hideCancelButton?: boolean;
	isLoading?: boolean;
	disableOkButton?: boolean;
	closeOnClickAway?: boolean;
	scroll?: "paper" | "body";
	overflow?: "visible" | "auto";
};

const Dialog = ({
	open,
	onClose,
	onOk,
	children,
	title,
	renderHeader,
	renderFooter,
	hiddenFooter,
	okText,
	cancelText,
	maxWidth = "sm",
	fullScreen,
	hideOkButton,
	hideCancelButton,
	isLoading,
	disableOkButton,
	closeOnClickAway = true,
	scroll = "paper",
	overflow = "auto",
}: Props) => {
	const t = useTranslations();

	const handleClose: DialogProps["onClose"] = (_e, reason) => {
		if ((reason === "backdropClick" && !closeOnClickAway) || isLoading) return;

		onClose();
	};

	return (
		<MuiDialog
			open={open}
			onClose={handleClose}
			fullWidth
			maxWidth={maxWidth}
			fullScreen={fullScreen}
			closeAfterTransition
			disableRestoreFocus
			PaperProps={{
				sx: { borderRadius: 2, overflow },
			}}
			scroll={scroll}
		>
			{renderHeader ?? (
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					px={5}
					py={4}
					gap={4}
					position="relative"
				>
					<DialogTitle sx={{ p: 0, flex: 1 }}>{title}</DialogTitle>

					<Box>
						<IconButton
							disabled={isLoading}
							onClick={onClose}
							size="small"
							sx={{ position: "absolute", right: 8, top: 8 }}
						>
							<CloseIcon color="action" />
						</IconButton>
					</Box>
				</Stack>
			)}

			<DialogContent dividers sx={{ p: 6, overflow: "visible" }}>
				{children}
			</DialogContent>

			{!hiddenFooter && (
				<DialogActions className="px-5 py-4">
					{renderFooter ? (
						renderFooter
					) : (
						<Fragment>
							{!hideCancelButton && (
								<Button
									disabled={isLoading}
									onClick={onClose}
									variant="outlined"
								>
									{cancelText ? cancelText : t("CANCEL")}
								</Button>
							)}

							{!hideOkButton && (
								<LoadingButton
									disabled={disableOkButton}
									loading={isLoading}
									onClick={onOk}
									variant="contained"
								>
									{okText ? okText : t("OK")}
								</LoadingButton>
							)}
						</Fragment>
					)}
				</DialogActions>
			)}
		</MuiDialog>
	);
};

export default Dialog;
