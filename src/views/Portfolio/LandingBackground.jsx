import React from "react";

import { PtsCanvas } from "react-pts-canvas";
import { Group, Pt, Line, Geom, Const, Num } from "pts";

export class LandingBackground extends PtsCanvas {
    constructor() {
        super();
    }

    _create() {}

    componentDidUpdate() {}

    // Override PtsCanvas' start function
    start(space, bound) {
        this._create();
    }

    // Override PtsCanvas' resize function
    resize() {
        this._create();
    }

    // Override PtsCanvas' animate function
    animate(time, ftime) {
        // create a line and get 200 interpolated points
        let offset = this.space.size.$multiply(0.2).y;
        let line = new Group(
            new Pt(0, offset),
            new Pt(this.space.size.x, this.space.size.y - offset)
        );
        let pts = Line.subpoints(line, 200);

        // get perpendicular unit vectors from each points on the line
        let pps = pts.map((p) =>
            Geom.perpendicular(p.$subtract(line[0]).unit()).add(p)
        );

        let angle =
            (this.space.pointer.x / this.space.size.x) * Const.two_pi * 2;

        // draw each perpendicular like a sine-wave
        pps.forEach((pp, i) => {
            let t =
                (i / 200) * Const.two_pi +
                angle +
                Num.cycle((time % 5000) / 5000);

            if (i % 2 === 0) {
                pp[0].to(
                    Geom.interpolate(pts[i], pp[0], Math.sin(t) * offset * 2)
                );
                pp[1].to(pts[i]);
                this.form.stroke("#0c6", 2).line(pp);
            } else {
                pp[0].to(pts[i]);
                pp[1].to(
                    Geom.interpolate(pts[i], pp[1], Math.cos(t) * offset * 2)
                );
                this.form.stroke("#f03", 2).line(pp);
            }
        });
    }
}
