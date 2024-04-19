"use client";
import {useLayoutEffect} from "react";

export default function GridSection() {
    useLayoutEffect( () => {
        const container = document.getElementById('animate-bg');
        const canvas = document.createElement('canvas');
        canvas.id = 'wave-canvas';
        const ctx = canvas.getContext('2d');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        container.appendChild(canvas);

        let waveHeightX = 10;
        let waveFrequencyX = 0.01;
        let speedX = 0.015; // Speed of wave movement in the X direction
        let waveHeightY = 10;
        let waveFrequencyY = 0.01;
        let speedY = 0.015; // Speed of wave movement in the Y direction

        let gridSize = 250; // Distance between grid points
        let offsetX = 0;
        let offsetY = 0;

        // Control variables for colours
        let primaryGridColour = '#A9A9A9'; // Colour of the primary grid lines

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Extend grid to cover visible area plus a bit more to avoid visible edges
            let extendedGridSizeX = Math.ceil(canvas.width / gridSize) + 1;
            let extendedGridSizeY = Math.ceil(canvas.height / gridSize) + 1;

            // Draw horizontal lines following the wave pattern
            for (let y = -gridSize; y <= extendedGridSizeY * gridSize; y += gridSize / 2) {
                ctx.beginPath();
                for (let x = -gridSize; x <= extendedGridSizeX * gridSize; x += 1) { // Increment by 1 for smoother lines
                    let waveX = Math.sin((y * waveFrequencyY) + offsetY) * waveHeightY;
                    let waveY = Math.sin((x * waveFrequencyX) + offsetX) * waveHeightX;
                    let adjustedX = x + waveX;
                    let adjustedY = y + waveY;

                    ctx.lineTo(adjustedX, adjustedY);
                }
                ctx.strokeStyle = primaryGridColour; // Adjust colour based on grid type
                ctx.stroke();
            }

            // Draw vertical lines following the wave pattern
            for (let x = -gridSize; x <= extendedGridSizeX * gridSize; x += gridSize / 2) {
                ctx.beginPath();
                for (let y = -gridSize; y <= extendedGridSizeY * gridSize; y += 1) { // Increment by 1 for smoother lines
                    let waveX = Math.sin((y * waveFrequencyY) + offsetY) * waveHeightY;
                    let waveY = Math.sin((x * waveFrequencyX) + offsetX) * waveHeightX;
                    let adjustedX = x + waveX;
                    let adjustedY = y + waveY;

                    ctx.lineTo(adjustedX, adjustedY);
                }
                ctx.strokeStyle = primaryGridColour; // Adjust colour based on grid type
                ctx.stroke();
            }

            // Update wave offsets
            offsetX += speedX;
            offsetY += speedY;
        }

        function animate() {
            requestAnimationFrame(animate);
            draw();
        }
        animate();
    })
    return (
        <div id={"animate-bg"} className={"absolute top-0 h-dvh w-full bg-white overflow-hidden"}>
        </div>
    );
}