import React from 'react';

import useScript from '../../hooks/useScript';



const News = (props) => {
   useScript('https://platform.twitter.com/widgets.js');

   return (
      <div>
         <a class="twitter-timeline" data-theme="light" href="https://twitter.com/msvetov?ref_src=twsrc%5Etfw">Tweets by msvetov</a>
      </div>
   );
};

export default News;
