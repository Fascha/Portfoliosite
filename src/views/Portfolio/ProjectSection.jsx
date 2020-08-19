import React from "react";
import {
    Grid,
    Container,
    makeStyles,
    Typography,
    List,
    ListItem,
    Collapse,
    Paper,
    IconButton,
} from "@material-ui/core";

import rpagif from "../../assets/img/rpaminer.gif";
import pokedexgif from "../../assets/img/pokedex.gif";
import LogoD3 from "../../assets/img/D3Logo.svg";
import LogoReact from "../../assets/img/ReactLogo.svg";
import LogoDjango from "../../assets/img/DjangoLogo.svg";
import LogoFlask from "../../assets/img/FlaskLogo.svg";
import LogoMongo from "../../assets/img/MongoLogo.svg";
import LogoPostgre from "../../assets/img/PostgreLogo.svg";
import LogoMUI from "../../assets/img/MUILogo.png";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
    projectContainer: {
        padding: theme.spacing(4, 1, 1, 0),
    },

    container: {
        position: "relative",
        width: "50%",
        "&::hover .overlay": {
            bottom: 0,
            height: "100%",
        },
    },

    image: {
        display: "block",
        width: "100%",
        height: "auto",
    },

    overlay: {
        position: "absolute",
        bottom: "100%",
        left: 0,
        right: 0,
        backgroundColor: " #008CBA",
        overflow: "hidden",
        width: "100%",
        height: 0,
        transition: ".5s ease",
    },

    //   container:hover .overlay {
    //     bottom: 0,
    //     height: "100%",
    //   },

    text: {
        color: "white",
        fontSize: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    },
}));

const Project = () => {
    return (
        <div>
            <Grid container>
                <Grid item lg={8}>
                    <img src={rpagif} />
                </Grid>
                <Grid item lg={4}>
                    This project features a fully functional backend with user
                    Authentication, Process Mining capabilities and various
                    other mathematical operations. On the frontend i built an
                    advanced interactive dashboard with multiple visualisations
                    and and tables.
                    <List>
                        <ListItem>Fully functional backend - Flask</ListItem>
                        <ListItem>Interactive visualisations - D3.js</ListItem>
                        <ListItem>
                            Tables (sortable & filterable) - Material UI
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export const ProjectsSection = () => {
    const classes = useStyles();
    return (
        <div
            style={
                {
                    // height: 1200,
                    // marginTop: "100vh",
                    // position: "absolute",
                    // top: "100vh",
                    // background: "red",
                }
            }
        >
            <Container maxWidth="lg" className={classes.projectContainer}>
                <Typography
                    variant="h2"
                    align="center"
                    style={{ marginTop: 128 }}
                >
                    Projects
                </Typography>

                <Grid container spacing={4} style={{ marginTop: 32 }}>
                    <Grid item md={12} lg={6}>
                        <img src={rpagif} style={{ width: "100%" }} />
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <img src={pokedexgif} style={{ width: "100%" }} />
                    </Grid>
                </Grid>

                <Typography
                    variant="h4"
                    style={{ marginTop: 128 }}
                    align="center"
                >
                    Source Code for this Website can be found on{" "}
                    <IconButton href="https://github.com/Fascha/Portfoliosite">
                        <GitHubIcon
                            style={{ color: "black", fontSize: "4rem" }}
                        ></GitHubIcon>
                    </IconButton>
                </Typography>
            </Container>
        </div>
    );
};
