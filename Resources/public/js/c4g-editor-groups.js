import {MemberGroup} from "./c4g-member-group";

/**
 * Implements a member group view for the portside editor. The members of the current project will be
 * displayed above the view selection.
 */
export class EditorGroups {

  _permissions;   // TODO nötig? welcher aufbau?
  _groups;
  _currentGroup;
  _groupData;
  _container;
  _displayed;

  constructor(groupData) {
    this._groupData = groupData;
    this._groups = [];
    this._currentGroup = null;
    this._permissions = {};
    this._container = null;
    // initially hide
    this._displayed = false;
  }

  init() {
    this._groups = this.createGroups(this._groupData);
    // initially select first group
    this._currentGroup = this._groups[0];
    this.createUserInterface();
  }

  createToggleButton(target) {
    const scope = this;
    let toggleButton = document.createElement('button');
    $(toggleButton).on('click', function (event) {
      if (scope._displayed) {
        $(toggleButton).addClass('toggle-group-collapsed').removeClass('toggle-group-uncollapsed');
        scope.hide();
      } else {
        $(toggleButton).addClass('toggle-group-uncollapsed').removeClass('toggle-group-collapsed');
        scope.show();
      }
    });
    $(toggleButton).addClass('toggle-group-collapsed');
    target.appendChild(toggleButton);
  }

  createUserInterface() {
    this._container = document.createElement('div');
    $(this._container).addClass('editor-member-group');
    this._memberContainer = document.createElement('ul');
    $(this._memberContainer).addClass('editor-member-list');
    this.updateUserInterface();
    this._container.appendChild(this._memberContainer);
    // hide container initially
    this._container.style.display = 'none';
  }

  updateUserInterface() {
    $(this._memberContainer).empty();
    let members = this._currentGroup.members;
    if (members) {
      for (let i = 0; i < members.length; i++) {
        this._memberContainer.appendChild(this.createAvatarBubbleForMember(members[i]));
      }
    }
  }

  createAvatarBubbleForMember(member) {
    // for initial testing
    let elem = document.createElement('span');
    elem.style.height = '40px';
    elem.style.width = '40px';
    elem.innerText = member.name;
    return elem;
    // TODO ImageData-API in Verbindung mit Canvas scheint hier die möglichkeit zu sein, um random pixel images zu bauen
    // TODO standard-Fall sollte natürlich sein, dass der Member irgendeine art von avatar zur verfügung gestellt hat,
    // TODO der dann hier angezeigt wird.
  }

  invitePerson() {
    // TODO show input field for email, then send to server
    // TODO "inviteMember"-Funktion in groups/Resources/contao/classes/CGController
  }

  selectGroup(group) {
    this._currentGroup = group;
    this.updateUserInterface();
  }

  createGroups(groupData) {
    const arrGroups = [];
    for (let i = 0; i < groupData.length; i++) {
      arrGroups.push(new MemberGroup(groupData[i].members, groupData[i].owner, groupData[i].projectId))
    }
    return arrGroups;
  }

  show() {
    $(this._container).css('display', '');
    this._displayed = true;
  }

  hide() {
    $(this._container).css('display', 'none');
    this._displayed = false;
  }

  getContainer() {
    return this._container;
  }

  /**
   * Called from the ProjectUIController to trigger a group change when the project is changed.
   * @param project
   */
  handleProjectChange(project) {
    for (let i = 0; i < this._groups.length; i++) {
      if (this._groups[i].projectId === project.id) {
        this.selectGroup(this._groups[i]);
        break;
      }
    }
  }

  // TODO bei Klick auf ne bubble müsste ein kontextmenü kommen. Da sollte man dann ein mitglied entfernen sollen
}