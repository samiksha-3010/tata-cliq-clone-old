
import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home  ()  {
  const router = useNavigate()
  function  MenMl(){
    router('/MenMl')
  }
  function MensMl(){
    router ('/MensMl')
  }
  return (

    <>
      <div className='maincontainer'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855656478.jpg' />
      </div>

      <div id='quick-procducts'>
        <div className='quick-procducts-align'>
          <div  onClick={MenMl}  className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042702878.jpg' />
          </div>
          <div onClick={MensMl} className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042702878.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466546206.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47548678373406.jpg' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466152990.jpg' />
          </div>
        </div>
      </div>

      <div id='bank-banner'>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg' />
        </div>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg' />
        </div>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46690782937118.jpg' />
        </div>
      </div> 
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344408094.jpg' />
        </div>
      </div>
      {/* for product showing  */}
      <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857851934.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865257502.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857983006.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866830366.jpg' />
          </div>
        </div>
      </div>
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993134948382.jpg' />
        </div>
      </div>
      {/* for product showing  */}
      <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' />
          </div>
        </div>
      </div>
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' />
        </div>
      </div>
      {/* for product showing with circle child div  */}

      <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' />
          </div>
        </div>



         {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993137373214.jpg' />
        </div>
      </div>


       {/* for product showing  */}
       <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' />
          </div>
        </div>
      </div>

          {/* *********Feature Brands*********** */}
          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993134948382.jpg' />
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124441118.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124506654.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124572190.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124637726.jpg'/>
              </div>

            </div>

          </div>
                       {/* *********hair corner********* */}

          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47636183449630.jpg' />
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/46926359527454.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/46926359658526.jpg'/>
              </div>
              

            </div>

          </div>



          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' />
        </div>
      </div>


          <div className='maincontainer'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/46904782979102.jpg' />
      </div>



      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' />
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263438878.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263504414.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263569950.jpg'/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603264159774.jpg'/>
              </div>

            </div>

          </div>
     
   
    </>

  )

}

export default Home