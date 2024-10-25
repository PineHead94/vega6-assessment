import { useSelector } from "react-redux";
import { lazy, memo, Suspense } from "react";

function ImagePicker({ addImage }) {
  const { data } = useSelector((state) => state.image);
  const LazyImageComponent = lazy(() => import("./ImageComponent"));

  return (
    <div className="image-picker-main-container">
      <div className="image-picker-sub-container">
        {data?.map((data, index) => {
          return (
            <Suspense key={index}>
              <LazyImageComponent
                image={data}
                key={index}
                addImage={addImage}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ImagePicker);
