describe('to-no-case', function () {

var assert = require('assert');
var none = require('to-no-case');

it('shouldnt touch space case', function () {
  assert('a space case string' == none('a space case string'));
});

it('should remove slug case', function () {
  assert('a slug case string' == none('a-slug-case-string'));
});

it('should remove snake case', function () {
  assert('a snake case string' == none('a_snake_case_string'));
});

it('should remove camel case', function () {
  assert('a camel case string' == none('aCamelCaseString'));
});

it('should remove constant case', function () {
  assert('a constant case string' == none('A_CONSTANT_CASE_STRING'));
});

it('should remove sentence case', function () {
  assert('a sentence case string.' == none('A sentence case string.'));
});

it('should remove title case', function () {
  assert('a title: case of string' == none('A Title: Case of String'));
});

});