let color = prompt("Enter your  traffic signal color (red/yellow/green):");


if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready To Move");
} else if (color.toLowerCase() ==="green") {
    alert("Move Now");
}
else{ alert("invalid color please choose correct color")}