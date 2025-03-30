import { FC, HTMLAttributes } from "react";
import { Icon, ReactComponentProps } from "@core-ui-components";
import { Icon as SpIcon } from "@spectrum-web-components/icon";

type SpectrumlogoIconProps = ReactComponentProps &
  Omit<Partial<SpIcon>, "style" | "children"> &
  HTMLAttributes<SpIcon>;

export const SpectrumlogoIcon: FC<SpectrumlogoIconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 38 32"
      >
        <g>
          <path
            className="st0"
            fill="#1473E6"
            d="M37.9,20.2L19,32L0.1,20.2l5.8-3.6L19,24.7l13.2-8.1L37.9,20.2z"
          />
          <path
            className="st1"
            fill="#1473E6"
            opacity="0.3"
            d="M27.2,9.3L19,14.3l-8.2-5.1l-5,3.1L19,20.5l13.1-8.1L27.2,9.3z"
          />
          <g className="st2" opacity="0.85">
            <rect
              x="21"
              y="1.5"
              transform="matrix(0.5292 -0.8485 0.8485 0.5292 8.2982 19.2806)"
              className="st0"
              fill="#1473E6"
              width="1"
              height="1.3"
            />
            <rect
              x="13.5"
              y="3.1"
              transform="matrix(0.8516 -0.5242 0.5242 0.8516 0.2435 7.9632)"
              className="st0"
              fill="#1473E6"
              width="1.3"
              height="1"
            />
            <rect
              x="23.3"
              y="2.9"
              transform="matrix(0.5292 -0.8485 0.8485 0.5292 8.167 21.8487)"
              className="st0"
              fill="#1473E6"
              width="1"
              height="1.3"
            />
            <rect
              x="15.8"
              y="1.7"
              transform="matrix(0.8516 -0.5242 0.5242 0.8516 1.3066 8.9396)"
              className="st0"
              fill="#1473E6"
              width="1.3"
              height="1"
            />
            <rect
              x="15.9"
              y="7.3"
              transform="matrix(0.5292 -0.8485 0.8485 0.5292 0.9925 17.6872)"
              className="st0"
              fill="#1473E6"
              width="1"
              height="1.3"
            />
            <rect
              x="13.7"
              y="5.9"
              transform="matrix(0.5292 -0.8485 0.8485 0.5292 1.1234 15.1185)"
              className="st0"
              fill="#1473E6"
              width="1"
              height="1.3"
            />
            <polygon
              className="st0"
              fill="#1473E6"
              points="19,8.9 18.5,8.7 18,9.5 19,10.1 19.9,9.5 19.4,8.7"
            />
            <polygon
              className="st0"
              fill="#1473E6"
              points="19,1.2 19.4,1.4 19.9,0.6 19,0 18,0.6 18.5,1.5"
            />
            <rect
              x="23.1"
              y="6.1"
              transform="matrix(0.8516 -0.5242 0.5242 0.8516 8.896903e-02 13.4351)"
              className="st0"
              fill="#1473E6"
              width="1.3"
              height="1"
            />
            <rect
              x="20.9"
              y="7.4"
              transform="matrix(0.8516 -0.5242 0.5242 0.8516 -0.9742 12.4583)"
              className="st0"
              fill="#1473E6"
              width="1.3"
              height="1"
            />
            <polygon
              className="st0"
              fill="#1473E6"
              points="10.8,5.1 12.2,5.9 12.7,5.1 12.2,4.2"
            />
            <polygon
              className="st0"
              fill="#1473E6"
              points="25.7,4.2 25.2,5.1 25.7,5.9 27.1,5.1"
            />
          </g>
        </g>
      </svg>
    </Icon>
  );
};

export default SpectrumlogoIcon;
