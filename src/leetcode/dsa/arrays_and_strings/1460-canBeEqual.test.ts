import { canBeEqual, canBeEqual2, canBeEqual3, canBeEqual4 } from './1460-canBeEqual'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4], [2,4,1,3],
      true
    ],
    [
      [7], [7],
      true
    ],
    [
      [3,7,9], [3,7,11],
      false
    ],
    [
      [625,275,151,780,968,193,470,902,346,933,71,730,612,447,323,832,153,680,224,573,100,948,247,38,940,301,883,343,495,797,521,637,554,580,936,824,280,88,125,355,434,863,518,55,157,167,233,365,682,64,747,997,453,861,158,930,153,299,547,172,833,300,89,769,353,579,154,885,715,575,697,714,490,1000,946,397,261,237,995,453,598,572,490,519,797,690,915,912,43,828,304,35,270,777,773,52,997,25,540,36,978,916,479,484,904,612,449,162,366,731,307,449,518,628,306,165,13,347,386,673,278,743,848,379,859,25,741,914,806,548,617,846,152,802,528,918,797,612,366,558,913,118,249,400,888,826,157,727,264,612,895,740,448,363,65,149,289,212],
      [100,930,997,883,275,386,306,38,490,366,554,323,125,153,212,741,916,912,997,637,278,740,289,714,797,379,521,697,165,157,933,802,806,797,861,65,264,978,479,363,304,484,680,824,447,270,573,682,832,13,448,846,915,490,153,158,247,353,365,449,547,167,449,355,612,612,233,237,162,453,88,52,249,397,151,280,366,36,773,826,224,346,518,885,261,690,89,859,612,540,55,518,64,863,193,453,888,727,715,833,347,572,918,940,35,149,43,575,1000,118,579,617,25,904,777,797,625,558,598,343,848,154,172,25,152,495,936,913,628,730,914,612,470,828,528,948,902,968,400,300,299,301,580,307,895,995,946,519,743,71,673,780,548,434,747,731,769,157],
      true
    ]
  ]
)('should work %#', (target, arr, output) => {
  expect(canBeEqual(target, arr)).toBe(output)
  expect(canBeEqual2(target, arr)).toBe(output)
  expect(canBeEqual3(target, arr)).toBe(output)
  expect(canBeEqual4(target, arr)).toBe(output)
})