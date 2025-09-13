import PropTypes from "prop-types";

export default function Center({ children }) {
  return (
    <section className="max-w-1780 mx-auto pl-[54px] pr-[38px] xs:pr-[54px] sm:pr-[108px]">
      {children}
    </section>
  );
}
