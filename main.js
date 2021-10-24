const links = document.querySelectorAll('a')

//replace with your users
const social = {
    github: 'joaosouza11',
    linkedin: 'joão-souza-57a00a20a',
    instagram: 'joaosouza_e',
    gmail: 'joaovitorpsouza11@gmail.com'
}

for (let link of links) {
    const className = link.getAttribute('class')
    if (link.classList.contains('gmail')) link.setAttribute('href', `mailto:${social[className]}`)
    if (link.classList.contains('linkedin')) link.setAttribute('href', `https://${className}.com/in/${social[className]}`)
    if (link.classList.contains('instagram')) link.setAttribute('href', `https://${className}.com/${social[className]}`)
    if (link.classList.contains('github')) link.setAttribute('href', `https://${className}.com/${social[className]}`)
}

    function getGitHubProfileInfos() {
      const url = `https://api.github.com/users/${social.github}`

      fetch(url)
        .then(response => response.json())
        .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url
          userImage.src = data.avatar_url
          userLogin.textContent = data.login
        })
    }

    getGitHubProfileInfos()
