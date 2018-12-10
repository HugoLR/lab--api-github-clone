const request = superagent
  request.get("https://api.github.com/users/HugoLR")
  .then(function(serverResult){
    console.log(serverResult.body)
    document.querySelector('h1').innerHTML = serverResult.body.name
    document.querySelector('.github__container__perfil__login').innerHTML = serverResult.body.login
    document.querySelector('.container__perfil--profile--img').src = serverResult.body.avatar_url
    document.querySelector('.github__container__perfil__company').textContent = serverResult.body.company
    document.querySelector('.github__container__perfil__location').textContent = serverResult.body.location
    document.querySelector('.github__container__perfil__mail').textContent = serverResult.body.email
    document.querySelector('.github__container__perfil__mail').style.color = "black";
    document.querySelector('.github__container__perfil__blog').innerHTML = serverResult.body.blog
    document.querySelector('.github__container__perfil__blog').style.color = "black";
  })
  .catch(function(error){
    console.log(error)
  })
  request.get("https://api.github.com/users/HugoLR/repos")
  .then(function(result){
    console.log(result.body)
    var template = ""
    result.body.forEach(function(repository){
      var {name} = repository
      var {description} = repository
      var {language} = repository
      var {stargazers_count} = repository
      var {updated_at} = repository
      template += `<article class="repo-info">
                      <h2>${name}</h2>
                      <h3>${description}</h3>
                      <p>${language} | ${stargazers_count} | ${updated_at}</p>
                    </article>`
      document.querySelector('.github__find--repository--info').innerHTML = template
    })
    .catch(function(error){
      console.log(error)
    })
  })

document.querySelector('input').addEventListener('keypress', function(e){
    var user = e.target.value
    if(e.keyCode === 13){
      request.get("https://api.github.com/users/" + user)
      .then(function(serverResult){
        console.log(serverResult.body)
        document.querySelector('h1').innerHTML = serverResult.body.name
        document.querySelector('.github__container__perfil__login').innerHTML = serverResult.body.login
        document.querySelector('.container__perfil--profile--img').src = serverResult.body.avatar_url
        document.querySelector('.github__container__perfil__company').textContent = serverResult.body.company
        document.querySelector('.github__container__perfil__location').textContent = serverResult.body.location
        document.querySelector('.github__container__perfil__mail').textContent = serverResult.body.email
        document.querySelector('.github__container__perfil__mail').style.color = "black";
        document.querySelector('.github__container__perfil__blog').innerHTML = serverResult.body.blog
        document.querySelector('.github__container__perfil__blog').style.color = "black";
      })
      .catch(function(error){
        console.log(error)
      })
      request.get("https://api.github.com/users/"+ user + "/repos")
      .then(function(result){
        console.log(result.body)
        var template = ""
        result.body.forEach(function(repository){
          var {name} = repository
          var {description} = repository
          var {language} = repository
          var {stargazers_count} = repository
          var {updated_at} = repository
          template += `<article class="repo-info">
                          <h2>${name}</h2>
                          <h3>${description}</h3>
                          <p>${language} | ${stargazers_count} | ${updated_at}</p>
                        </article>`
          document.querySelector('.github__find--repository--info').innerHTML = template
        })
      })
      .catch(function(error){
        console.log(error)
      })
    }
})
