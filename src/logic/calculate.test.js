import calculate from "./calculate";
import chai from "chai";

chai.config.truncateThreshold = 0;

const expect = chai.expect;

function pressButtons(buttons) {
    const value = {};
    button.forEach(buttons => {
        Object.assign(value, calculate(value, button));
    });
    Object.keys(value).forEach(key => {
        if (value[key] === null) {
            delete value[key];
        }
    });
    return value;
}
function expectButtons(buttons, expectation){
    expect(pressButtons(buttons)).to.deep.equal(expectation);
}
function test (buttons, expectation, only = false){
    const func = only ? it.only : it;
    func(`buttons ${`buttons.join(",")} -> ${JSON.stringify(expectation)}`, () => {
        expectButtons(buttons.join)
    })
}