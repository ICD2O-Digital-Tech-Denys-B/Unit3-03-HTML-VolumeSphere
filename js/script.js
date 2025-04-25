// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function calcVolume() {
    let radius = parseFloat(document.getElementById("radius").value)
    let step1 = 4 / 3
    let step2 = radius * radius * radius
    let step3 = step1 * (Math.PI * step2)
    let answer = step3.toFixed(2)
    document.getElementById("answer").innerHTML = "V ≈" + answer +"cm";
}