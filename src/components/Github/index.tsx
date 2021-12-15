import React, { useEffect, useState } from 'react';

import { 
  Container, 
  SectionRepository, 
  List, 
  Card, 
  RepositoryTitle, 
  RepositoryDescription, 
  RepositoryLink 
} from './styles';

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function Github() {
  const [githubData, setGithubData] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function getProfileInGithub() {
      const getLocalStorage = localStorage.getItem('@github');

      if (!getLocalStorage) {
        const response = await fetch('https://api.github.com/users/wesleywisch/repos')
          .then(response => response.json())

        setGithubData(response);
        localStorage.setItem('@github', JSON.stringify(response));
        setLoading(false);
        return;
      }

      setGithubData(JSON.parse(getLocalStorage));
      setLoading(false);
    }

    getProfileInGithub();
  }, [])

  return (
    <Container>
      <SectionRepository>
        <h3>Lista de repositórios</h3>

        <List>
          {loading && (
            <p>carregando... <br />
              Está demorando demais? <a href="https://github.com/wesleywisch">Clique aqui!</a>
            </p>
          )}

          {githubData.map((repository, key) => (
            <Card key={key}>
              <RepositoryTitle>{repository.name}</RepositoryTitle>
              <RepositoryDescription>{repository.description}</RepositoryDescription>

              <RepositoryLink href={repository.html_url}>
                Acessar repositório
                <span></span>
              </RepositoryLink>
            </Card>
          ))}
        </List>
      </SectionRepository>
    </Container>
  );
}