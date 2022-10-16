import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '@mui/material/Pagination/Pagination';


const SwipeableStepper = React.forwardRef<any, { onReload: () => void }>((props, ref) => {
    const { children, onReload } = props;
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const childlen = React.Children.toArray(children).length;
    // const maxSteps = childlen > 6 ? 6 : childlen;

    React.useImperativeHandle(ref, () => ({
        resetIndex: () => setActiveStep(0)
    }), [])


    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step: number) => {
        // setActiveStep(step);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setActiveStep(value - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                // enableMouseEvents
            >
                {children}
            </SwipeableViews>


            <Pagination count={childlen} page={activeStep + 1} onChange={handleChange} />
        </Box>
    );
})

export default SwipeableStepper;
