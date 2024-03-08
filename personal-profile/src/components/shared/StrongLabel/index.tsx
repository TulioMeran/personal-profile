import { Box, SxProps } from "@mui/material"
import { FC } from "react"

interface Props {
    label: string
}
const StrongLabel: FC<Props> = ({label}) => {

    const styleLabel: SxProps = {
        fontWeight: 'bold'
    }

    return (
        <Box component={'label'} sx={styleLabel} >{label}</Box>
    )
}

export default StrongLabel