import React from "react";
import { Typography, makeStyles, Grid, Icon, SvgIcon } from "@material-ui/core";

import RocketIcon from "mdi-react/RocketIcon";
import LightbulbIcon from "mdi-react/LightbulbIcon";
import MonitorCellphoneIcon from "mdi-react/MonitorCellphoneIcon";

import Hexagon from "react-hexagon";

import LogoD3 from "../../assets/img/D3Logo.svg";

import LogoDjango from "../../assets/img/DjangoLogo.svg";
import LogoDocker from "../../assets/img/DockerLogo.svg";
import LogoFlask from "../../assets/img/FlaskLogo.svg";
import LogoMUI from "../../assets/img/MUILogo.png";

import LogoMongo from "../../assets/img/MongoLogo.svg";

import LogoPandas from "../../assets/img/PandasLogo.svg";
import LogoPyTorch from "../../assets/img/PytorchLogo.png";
import LogoPostgre from "../../assets/img/PostgreLogo.svg";

import LogoReact from "../../assets/img/ReactLogo.svg";
import LogoTensorflow from "../../assets/img/TensorflowLogo.svg";

const useStyles = makeStyles((theme) => ({
    // hexagon: {
    //     marginTop: "30px",
    //     width: theme.spacing(8),
    //     height: theme.spacing(4),
    //     backgroundColor: "#6C6",
    //     position: "relative",
    //     "&::before": {
    //         content: '""',
    //         width: 0,
    //         height: 0,
    //         borderBottom: `${theme.spacing(8)} solid #6C6`,
    //         borderLeft: "52px solid transparent",
    //         borderRight: "52px solid transparent",
    //         position: "absolute",
    //         top: "-30px",
    //     },
    //     "&::after": {
    //         content: '""',
    //         width: 0,
    //         position: "absolute",
    //         bottom: "-30px",
    //         borderTop: "30px solid #6C6",
    //         borderLeft: "52px solid transparent",
    //         borderRight: "52px solid transparent",
    //     },
    // },
}));

const LineSpacer = () => {
    return (
        <div
            style={{
                height: 4,
                width: 60,
                background: "black",
                marginBottom: 16,
            }}
        ></div>
    );
};

export const AboutSection = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography
                variant="h2"
                align="center"
                gutterBottom
                style={{ marginTop: 64 }}
            >
                About
            </Typography>
            {/* <div className={classes.hexagon}></div> */}
            <Grid container justify="center">
                <Grid item md={12} lg={3}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <RocketIcon size={64}></RocketIcon>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                >
                                    Dynamic
                                </Typography>
                                {LineSpacer()}
                                <Typography variant="body1" align="center">
                                    Websites don't need to be static. I love
                                    building data driven Applications.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} lg={3}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <MonitorCellphoneIcon
                                size={64}
                            ></MonitorCellphoneIcon>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                >
                                    Responsive
                                </Typography>
                                {LineSpacer()}
                                <Typography variant="body1" align="center">
                                    Layout working on all common devices from
                                    phones to ultrawide monitors.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} lg={3}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <LightbulbIcon size={64}></LightbulbIcon>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                >
                                    Intutitive
                                </Typography>
                                {LineSpacer()}
                                <Typography variant="body1" align="center">
                                    Strong focus on user experience and
                                    usability.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={8} style={{ marginTop: 128 }}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                align="center"
                            >
                                My current Tech Stack
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoReact}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <Grid container justify="center">
                                    <img
                                        src={LogoMUI}
                                        style={{
                                            height: "64px",
                                            marginTop: "32px",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoD3}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoDjango}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoFlask}
                                    style={{
                                        height: "50px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoDocker}
                                    style={{
                                        height: "50px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoMongo}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoPandas}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoPostgre}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoPyTorch}
                                    style={{
                                        height: "50px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Grid container justify="center">
                                <img
                                    src={LogoTensorflow}
                                    style={{
                                        height: "64px",
                                        marginTop: "32px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
