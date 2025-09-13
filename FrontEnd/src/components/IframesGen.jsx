import PropTypes from "prop-types";

export default function IframesGenerator({ iframesArray, loading }) {
  if (loading) {
    /* alternatives: MUI 的 Spinner etc.. */
    return <h2>Loading...</h2>;
  }

  const divs = [];

  for (let i = 0; i < iframesArray.length; i += 3) {
    const iframesSlice = iframesArray.slice(i, i + 3);
    const iframesDiv = (
      <div
        key={i}
        className="min-w-[1088.17px] flex flex-col lg:flex-row justify-start items-center gap-[50px] mb-[50px] lg:mb-[42px] "
      >
        {iframesSlice.map((iframe) => (
          <div
            key={`wrapper-${iframe.id}`}
            className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300"
          >
            <iframe
              key={iframe.id}
              width={iframe.width}
              height={iframe.height}
              src={iframe.src}
              title={iframe.title}
              allow={iframe.allow}
              referrerPolicy={iframe.referrerPolicy}
              allowFullScreen={iframe.allowFullScreen}
            ></iframe>
          </div>
        ))}
      </div>
    );

    divs.push(iframesDiv);
  }

  return (
    <div className="w-full flex flex-col justify-start items-center">
      {divs}
    </div>
  );
}

IframesGenerator.propTypes = {
  iframesArray: PropTypes.array,
  loading: PropTypes.bool,
};
