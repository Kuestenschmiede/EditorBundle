export class MemberGroup {

  _members;
  _owner;
  _projectId;
  _id;

  constructor(id, members, owner, projectId) {
    this._id = id;
    this._members = members;
    this._owner = owner;
    this._projectId = projectId;
  }

  removeMemberFromGroup(memberId) {
    // TODO remove from array and call server groups api
  }

  get id() {
    return this._id;
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