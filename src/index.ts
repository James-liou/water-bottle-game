import { Combiner } from "./combiner";
import { WaterBottle, WaterBottleColor } from "./water_bottle";

// 73
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.褐, WaterBottleColor.深紫, WaterBottleColor.深藍, WaterBottleColor.淺藍],
//     [WaterBottleColor.粉, WaterBottleColor.橙, WaterBottleColor.深紫, WaterBottleColor.深绿],
//     [WaterBottleColor.紅, WaterBottleColor.淺藍, WaterBottleColor.深綠, WaterBottleColor.淺紫],
//     [WaterBottleColor.淺綠, WaterBottleColor.粉, WaterBottleColor.橙, WaterBottleColor.淺紫],
//     [WaterBottleColor.深藍, WaterBottleColor.淺藍, WaterBottleColor.紅, WaterBottleColor.深綠],
//     [WaterBottleColor.淺藍, WaterBottleColor.紅, WaterBottleColor.淺紫, WaterBottleColor.褐],
//     [WaterBottleColor.红, WaterBottleColor.橙, WaterBottleColor.深紫, WaterBottleColor.褐],
//     [WaterBottleColor.粉, WaterBottleColor.淺綠, WaterBottleColor.深藍, WaterBottleColor.淺紫],
//     [WaterBottleColor.淺綠, WaterBottleColor.粉, WaterBottleColor.橙, WaterBottleColor.深紫],
//     [WaterBottleColor.深藍, WaterBottleColor.淺綠, WaterBottleColor.深綠, WaterBottleColor.褐],
//     [],
//     []
// ].map(item => item.reverse())

const initialWaterBottles: (WaterBottleColor[])[] = [
    [7, 4, 0, 1],
    [9, 8, 4, 2],
    [6, 1, 2, 5],
    [3, 9, 8, 5],
    [0, 1, 6, 2],
    [1, 6, 5, 7],
    [6, 8, 4, 7],
    [9, 3, 0, 5],
    [3, 9, 8, 4],
    [0, 3, 2, 7],
    [],
    [],
].map(item => item.reverse())

const waterBottles = initialWaterBottles.map(colors => new WaterBottle(colors))

const combiner = new Combiner(waterBottles)
combiner.start()
