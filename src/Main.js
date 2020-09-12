import React from 'react';
import Lesson from './Lesson';
import Contact from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      { name: "HTML & CSS", image: "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" },
      { name: "Javascript", image: "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg" },
      { name: "SASS", image: "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg" },
      { name: "React", image: "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg" }
    ];

    return(
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          {/* loop component disini */}
          {/* harus menambahkan kunci untuk setiap anak serta setiap elemen di dalam anak. */}
          {/* maka itu 'i' akan menjadi index untuk key/kuncinya */}
          {lessonList.map((lessonItem, i) => {
            return (
              <Lesson
                key={i}
                name={lessonItem.name}
                image={lessonItem.image}
              />
            )
          })}
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3>Kontak Kami</h3>
            <Contact />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="footer mt-5 pt-4 pb-4 text-dark">&copy; Zul Hilmi &#8212; Proget.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;