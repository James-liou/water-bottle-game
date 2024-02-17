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

// 75
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.浅蓝, WaterBottleColor.深蓝, WaterBottleColor.浅绿, WaterBottleColor.红],
//     [WaterBottleColor.黄, WaterBottleColor.紫, WaterBottleColor.紫, WaterBottleColor.紫],
//     [WaterBottleColor.浅绿, WaterBottleColor.青, WaterBottleColor.青, WaterBottleColor.褐],
//     [WaterBottleColor.褐, WaterBottleColor.黄, WaterBottleColor.深绿, WaterBottleColor.深绿],
//     [WaterBottleColor.红, WaterBottleColor.黄, WaterBottleColor.浅蓝, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.浅蓝, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.褐, WaterBottleColor.青, WaterBottleColor.深绿, WaterBottleColor.紫],
//     [WaterBottleColor.浅蓝, WaterBottleColor.浅绿, WaterBottleColor.深蓝, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.黄, WaterBottleColor.青, WaterBottleColor.浅绿],
//     [],
//     []
// ].map(item => item.reverse())

// 76
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.粉, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.青, WaterBottleColor.黄, WaterBottleColor.橙, WaterBottleColor.粉],
//     [WaterBottleColor.灰, WaterBottleColor.青, WaterBottleColor.紫, WaterBottleColor.青],
//     [WaterBottleColor.深绿, WaterBottleColor.青, WaterBottleColor.褐, WaterBottleColor.黄],
//     [WaterBottleColor.深绿, WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.橙],
//     [WaterBottleColor.黄, WaterBottleColor.红, WaterBottleColor.灰, WaterBottleColor.紫],
//     [WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.粉, WaterBottleColor.褐],
//     [WaterBottleColor.红, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.黄, WaterBottleColor.粉, WaterBottleColor.红, WaterBottleColor.红],
//     [],
//     []
// ].map(item => item.reverse())

// 77
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.橙, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.灰],
//     [WaterBottleColor.深绿, WaterBottleColor.红, WaterBottleColor.深蓝, WaterBottleColor.红],
//     [WaterBottleColor.灰, WaterBottleColor.浅蓝, WaterBottleColor.褐, WaterBottleColor.粉],
//     [WaterBottleColor.橙, WaterBottleColor.浅蓝, WaterBottleColor.深蓝, WaterBottleColor.粉],
//     [WaterBottleColor.灰, WaterBottleColor.深绿, WaterBottleColor.橙, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.灰, WaterBottleColor.紫, WaterBottleColor.深蓝],
//     [WaterBottleColor.褐, WaterBottleColor.粉, WaterBottleColor.褐, WaterBottleColor.粉],
//     [WaterBottleColor.浅蓝, WaterBottleColor.紫, WaterBottleColor.橙, WaterBottleColor.红],
//     [WaterBottleColor.褐, WaterBottleColor.浅蓝, WaterBottleColor.紫, WaterBottleColor.深绿],
//     [],
//     []
// ].map(item => item.reverse())

// 78
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.青, WaterBottleColor.灰, WaterBottleColor.青, WaterBottleColor.橙],
//     [WaterBottleColor.黄, WaterBottleColor.粉, WaterBottleColor.浅蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.浅绿],
//     [WaterBottleColor.青, WaterBottleColor.粉, WaterBottleColor.灰, WaterBottleColor.褐],
//     [WaterBottleColor.浅绿, WaterBottleColor.橙, WaterBottleColor.粉, WaterBottleColor.褐],
//     [WaterBottleColor.灰, WaterBottleColor.浅绿, WaterBottleColor.黄, WaterBottleColor.浅蓝],
//     [WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.浅绿, WaterBottleColor.深蓝],
//     [WaterBottleColor.深蓝, WaterBottleColor.粉, WaterBottleColor.黄, WaterBottleColor.青],
//     [WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.黄, WaterBottleColor.浅蓝],
//     [],
//     []
// ].map(item => item.reverse())

// 79
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.褐, WaterBottleColor.褐, WaterBottleColor.紫, WaterBottleColor.深蓝],
//     [WaterBottleColor.浅蓝, WaterBottleColor.浅绿, WaterBottleColor.深绿, WaterBottleColor.浅绿],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.橙],
//     [WaterBottleColor.浅蓝, WaterBottleColor.褐, WaterBottleColor.青, WaterBottleColor.深绿],
//     [WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.红, WaterBottleColor.深蓝],
//     [WaterBottleColor.青, WaterBottleColor.青, WaterBottleColor.紫, WaterBottleColor.浅绿],
//     [WaterBottleColor.浅蓝, WaterBottleColor.橙, WaterBottleColor.浅蓝, WaterBottleColor.深绿],
//     [WaterBottleColor.深绿, WaterBottleColor.青, WaterBottleColor.红, WaterBottleColor.浅绿],
//     [WaterBottleColor.红, WaterBottleColor.深蓝, WaterBottleColor.紫, WaterBottleColor.红],
//     [],
//     []
// ].map(item => item.reverse())

// 残局挑战1
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.红, WaterBottleColor.红, WaterBottleColor.红],
//     [WaterBottleColor.黄, WaterBottleColor.黄, WaterBottleColor.黄, WaterBottleColor.黄],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.浅蓝, WaterBottleColor.橙, WaterBottleColor.红, WaterBottleColor.紫],
//     [WaterBottleColor.深蓝, WaterBottleColor.深蓝, WaterBottleColor.橙],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.浅蓝, WaterBottleColor.紫],
//     [],
//     [WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.深蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.褐, WaterBottleColor.褐, WaterBottleColor.深绿],
//     [WaterBottleColor.灰, WaterBottleColor.灰, WaterBottleColor.灰, WaterBottleColor.灰],
//     [WaterBottleColor.深绿, WaterBottleColor.深绿, WaterBottleColor.深绿],
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
