import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

export class SubdomainCacheController {

  constructor(editor) {
    this.editor = editor;
    this.subdomainObj = {};
    // map for mapping subdomain ids to the cached data
    this.subdomainObj.subdomains = {};
  }

  saveCache() {
    utils.storeValue("subdomainCache", JSON.stringify(this.subdomainObj));
  }

  loadCache() {
    const cacheItem = utils.getValue("subdomainCache");
    if (cacheItem) {
      this.subdomainObj = JSON.parse(cacheItem);
    }
  }

  addValueForSubdomain(subdomain, key, value) {
    // if the cache entry does not exist, create it
    if (!this.subdomainObj.subdomains[subdomain]) {
      this.subdomainObj.subdomains[subdomain] = {};
    }
    this.subdomainObj.subdomains[subdomain][key] = value;
    this.saveCache();
  }

  getValuesForSubdomain(subdomain) {
    return this.subdomainObj.subdomains[subdomain];
  }

}