function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.assessCooper = function (distance) {
  this.cooperMessage = cooperAssessmentOf(this, distance);
};
