/**
 * Joomla API wrapper
 */

export default class JAPI {
  constructor(site = null, token = null) {
    this.site = site
    this.token = token

    if (null === this.site) {
      console.log('JAPI ERROR: You have not defined a site')
    }

    if (null === this.token) {
      console.log('JAPI ERROR: You have not defined a token')
    }
  }

  get(path) {
    return this.process(path, 'GET')
  }

  post(path, data = null) {
    return this.process(path, 'POST', data)
  }

  remove(path) {
    return this.process(path, 'DELETE')
  }

  update(path, data = null) {
    return this.process(path, 'PATCH', data)
  }

  async process(path, method = 'GET', data) {
    const options = {
      method: method,
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    }

    // If data exists, stringify the object
    if (null !== data) {
      options.body = JSON.stringify(data)
    }

    return await (await fetch(`${this.site}/api/index.php/v1/${path}`, options)).json()
  }
}
