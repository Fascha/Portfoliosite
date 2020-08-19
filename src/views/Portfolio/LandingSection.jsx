import React from "react";
import { Paper, Typography, IconButton, Grid } from "@material-ui/core";

import LandingBG from "../../assets/img/landing_raw.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { LandingBackground } from "./LandingBackground";

const styles = {
    landingContainer: {
        // backgroundImage: `url(${LandingBG})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // opacity: 0.5,

        background: "#0000", //transparent to show layer behind

        height: "100vh",
        width: "100%",

        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        zIndex: 2,
        left: 0,
        top: 0,
    },
};

export const LandingSection = () => {
    return (
        <div>
            <LandingBackground
                name="anim"
                style={{
                    height: "100vh",
                    width: "100%",
                    // position: "absolute",
                    zIndex: 1,
                    left: 0,
                    top: 0,
                }}
            ></LandingBackground>
            <Paper style={styles.landingContainer}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            Hey, I'm{" "}
                            <span style={{ color: "#2980b9" }}>
                                Fabian Schatz
                            </span>
                            .
                        </Typography>
                        <Typography variant="h2" gutterBottom>
                            I'm a full-stack developer.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <IconButton href="https://www.github.com/Fascha">
                            <GitHubIcon
                                style={{ color: "white", fontSize: "4rem" }}
                            ></GitHubIcon>
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/fabian-schatz-a6bab0146/">
                            <LinkedInIcon
                                style={{ color: "white", fontSize: "4rem" }}
                            ></LinkedInIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
