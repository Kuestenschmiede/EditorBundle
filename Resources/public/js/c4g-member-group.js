export class MemberGroup {

  _members;
  _owner;
  _projectId;

  constructor(members, owner, projectId) {
    this._members = members;
    this._owner = owner;
    this._projectId = projectId;
  }

  removeMemberFromGroup(memberId) {
    // TODO remove from array and call server groups api
  }

  get members() {
    return this._members;
  }

  get owner() {
    return this._owner;
  }

  get projectId() {
    return this._projectId;
  }
}