/**
 * 狼、羊、菜和农夫过河问题 js 实现部分
 */

 const Action = {
        'GO_SELF' : 'GO_SELF',
        'GO_WITH_WOLF': 'GO_WITH_WOLF',
        'GO_WITH_SHEEP': 'GO_WITH_SHEEP',
        'GO_WITH_VEGETABLE': 'GO_WITH_VEGETABLE',
        'BACK_SELF': 'BACK_SELF',
        'BACK_WITH_WOLF': 'BACK_WITH_WOLF',
        'BACK_WITH_SHEEP': 'BACK_WITH_SHEEP',
        'BACK_WITH_VEGETABLE': 'BACK_WITH_VEGETABLE'
}
function ProcessFarmerGo(){}
function ProcessFarmerGoTakeWolf(){}
function ProcessFarmerGoTakeSheep(){}
function ProcessFarmerGoTakeVegetable(){}
function ProcessFarmerBack(){}
function ProcessFarmerBackTakeWolf(){}
function ProcessFarmerBackTakeSheep(){}
function ProcessFarmerBackTakeVegetable(){}
console.log(Action.GO_SELF);
const actMap = [
    {Action.GO_SELF: ProcessFarmerGo},
    {Action.GO_WITH_WOLF: ProcessFarmerGoTakeWolf },
    {Action.GO_WITH_SHEEP: ProcessFarmerGoTakeSheep},
    {Action.GO_WITH_VEGETABLE: ProcessFarmerGoTakeVegetable},
    {Action.BACK_SELF: ProcessFarmerBack},
    {Action.BACK_WITH_WOLF: ProcessFarmerBackTakeWolf},
    {Action.BACK_WITH_SHEEP: ProcessFarmerBackTakeSheep},
    {Action.BACK_WITH_VEGETABLE:ProcessFarmerBackTakeVegetable}
]



