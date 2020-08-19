import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { LandingSection } from "./LandingSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectSection";

export const Portfolio = () => {
    return (
        <div>
            <LandingSection></LandingSection>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
            <footer style={{ background: "#2c3e50", padding: 32 }}>
                <Grid container justify="center">
                    <Typography variant="subtitle1" style={{ color: "white" }}>
                        &copy; Fabian Schatz 2020
                    </Typography>
                </Grid>
            </footer>
        </div>
    );
};
