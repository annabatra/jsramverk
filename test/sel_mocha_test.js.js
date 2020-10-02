"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox')
const By = require("selenium-webdriver").By;
// const chromedriver = require('chromedriver');

let browser;

// Test Suite
test.describe("Test my Me-page", function() {

    test.beforeEach(function(done) {
        this.timeout(30000);
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .setFirefoxOptions(new firefox.Options().headless())
            .forBrowser("firefox")
            .build();

        browser.get("http://localhost:3000/reports/week/1");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith(target));
        });
    }

    function assertH3(target) {
        browser.findElement(By.css("h3")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    function assertInput() {
        browser.findElement(By.css("input[name='email']")).click();
    }

    // Test case
    test.it("Test reports/week/1", function(done) {
        // Check correct title
        browser.getTitle().then(function(title) {
            assert.equal(title, "Min me-app");
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Vecka 1");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("reports/week/1"));
        });

        done();
    });

    test.it("test access register page", function (done) {
        goToNavLink("> skapa användare");
        matchUrl("/register");
        assertH3("Registrera ny användare");
        done();
    });

    test.it("test to find the edit report btn", function (done) {
        browser.findElement(By.css(".button")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "REDIGERA INNEHÅLL");
            })
        })
        done();
    });

    test.it("test access login page and click on email input", function (done) {
        goToNavLink("> logga in/ut");
        matchUrl("/login");
        assertInput();
        done();
    });
});
