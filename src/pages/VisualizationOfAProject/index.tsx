// import { useParams } from 'react-router-dom';

import { BannerProject } from '../../components/reusable/BannerProject';

import { VisualizationOfAProjectContainer } from './styles';

export function VisualizationOfAProject() {
  // let { slugParams } = useParams();

  return(
    <VisualizationOfAProjectContainer>
      <BannerProject 
        title='Projeto 01'
        type='Website'
        imgUrl='https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital.png'
      />

      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolore eveniet perferendis odio neque nulla, ipsam ipsum mollitia ullam soluta ab eum quam possimus sit vel voluptatum cupiditate assumenda necessitatibus nemo laboriosam. Ipsa temporibus quidem fugit impedit similique eius doloremque molestias blanditiis atque, assumenda quaerat nisi recusandae sequi accusamus cupiditate quas. Enim vitae odio fugit odit. Magni blanditiis optio deserunt libero sunt corrupti nisi fuga, incidunt suscipit, quasi fugiat maxime adipisci itaque sapiente. Odio iusto, cupiditate animi deleniti aliquam nisi.
        </p>

        <button type='button'>
          <a href="#o">Ver projeto online</a>
        </button>
      </div>
    </VisualizationOfAProjectContainer>
  );
}