import { expect } from 'chai';

describe('Search field in version 1', () => {
	it('should be displayed with above 768px', () => {
		browser.url('/gridHackathonV1.html');
		browser.setWindowSize(1200, 700);
		const searchField = $('#INPUTtext____42');
		expect(searchField.isDisplayed()).to.be.true;
	});
	it('should be hidden with below 768px', () => {
		browser.url('/gridHackathonV1.html');
		browser.setWindowSize(700, 700);
		const searchField = $('#INPUTtext____42');
		expect(searchField.isDisplayed()).to.be.false;
	});
});

describe('Search field in version 2', () => {
	it('should be displayed with above 768px', () => {
		browser.url('/gridHackathonV2.html');
		browser.setWindowSize(1200, 700);
		const searchField = $('#INPUTtext____42');
		expect(searchField.isDisplayed()).to.be.true;
	});
	it('should be hidden with below 768px', () => {
		browser.url('/gridHackathonV2.html');
		browser.setWindowSize(700, 700);
		const searchField = $('#INPUTtext____42');
		expect(searchField.isDisplayed()).to.be.false;
	});
});
