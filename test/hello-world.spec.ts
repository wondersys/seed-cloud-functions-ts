import { HelloWorld } from "../src/hello-world";
import { expect } from 'chai';

describe('Test Hello World',() => {
    it('Say Hello',() => {
        const helloWorkd = new HelloWorld();
        const myHello = helloWorkd.getHello();
        expect(myHello).to.be.equal('Hello World!');
    });
});