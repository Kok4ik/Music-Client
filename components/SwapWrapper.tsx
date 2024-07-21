
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React, { FC} from 'react'

interface SwapWrapperProps {
    activeStep: number;
    steps: string[];
    children: React.ReactNode
}
const SwapWrapper: FC<SwapWrapperProps> = ({activeStep, children, steps}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => 
                    <Step key={label}
                        completed={activeStep > index}
                    >
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent={'center'} style={{margin: '70px 0', height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}

export default SwapWrapper