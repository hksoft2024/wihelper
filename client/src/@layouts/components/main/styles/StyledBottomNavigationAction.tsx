"use client";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "@mui/material/styles/styled";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
	({ theme }) => ({
		maxWidth: "unset",
		color: theme.palette.text.muted,
		fontFamily: "inherit",
	})
);

export default StyledBottomNavigationAction;
