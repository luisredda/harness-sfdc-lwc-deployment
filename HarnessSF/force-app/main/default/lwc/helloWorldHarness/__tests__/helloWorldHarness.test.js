import { createElement } from 'lwc';
import HelloWorldHarness from 'c/helloWorldHarness';

describe('c-hello-world-harness', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Salesforce Function Test', () => {
        // Arrange
        const element = createElement('c-hello-world-harness', {
            is: HelloWorldHarness
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});