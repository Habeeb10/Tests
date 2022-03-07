import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackIcon = props => {
  return (
    <Svg width="12" height="21" viewBox="0 0 12 21" fill="none">
      <Path
        d="M3.60206 10.5L11.4062 2.55085C11.9866 1.9597 11.9778 1.00999 11.3867 0.429623C10.7955 -0.150747 9.84583 -0.142006 9.26546 0.449147L0.429623 9.44915C-0.143208 10.0326 -0.143208 10.9674 0.429623 11.5509L9.26546 20.5509C9.84583 21.142 10.7955 21.1507 11.3867 20.5704C11.9778 19.99 11.9866 19.0403 11.4062 18.4491L3.60206 10.5Z"
        fill="black"
      />
    </Svg>
  );
};

export const EditIcon = props => {
  return (
    <Svg
      width={props.width || 23}
      height={props.width || 23}
      viewBox="0 0 23 23"
      fill="none"
      {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.0197 0.351472L20.9285 0.269096C20.4572 -0.115327 19.7619 -0.0878679 19.3226 0.351472L18.1919 1.48214L20.6668 3.95701L21.7975 2.82635L21.8798 2.73521C22.2643 2.26388 22.2368 1.56863 21.7975 1.12929L21.0197 0.351472ZM17.7556 1.91701L18.4629 2.62399C18.4629 2.62399 10.417 10.6231 10.0228 11.0654C9.84995 11.2594 9.7998 11.5135 9.79798 11.7376C9.79528 12.0701 10.0656 12.3313 10.3981 12.3337C10.6326 12.3353 10.8974 12.2915 11.0835 12.1261C11.4958 11.7596 19.5235 3.68465 19.5235 3.68465L20.2305 4.39188L11.1157 13.5081C10.7378 13.886 9.94376 14.1126 8.73355 14.188L8.46785 14.2018H8.42556C8.18032 14.1914 7.98382 14.0061 7.95139 13.7712L7.94714 13.6811L7.96098 13.4154C8.03094 12.2916 8.23133 11.5267 8.56214 11.1206L8.64079 11.0333L17.7556 1.91701ZM14.757 3.15224L13.256 4.65224H2C1.72386 4.65224 1.5 4.8761 1.5 5.15224V20.1522C1.5 20.4284 1.72386 20.6522 2 20.6522H17C17.2761 20.6522 17.5 20.4284 17.5 20.1522V8.89424L19 7.39524V20.1522C19 21.2568 18.1046 22.1522 17 22.1522H2C0.89543 22.1522 0 21.2568 0 20.1522V5.15224C0 4.04767 0.89543 3.15224 2 3.15224H14.757Z"
        fill="black"
      />
    </Svg>
  );
};

export const DeleteIcon = props => {
  return (
    <Svg
      width={props.width || 11}
      height={props.height || 13}
      viewBox="0 0 11 13"
      fill="none"
      {...props}>
      <Path
        d="M0.5 2.46875C0.5 2.5625 0.523438 2.63281 0.570312 2.67969C0.617188 2.72656 0.6875 2.75 0.78125 2.75H10.7188C10.7891 2.75 10.8594 2.72656 10.9062 2.67969C10.9531 2.63281 11 2.5625 11 2.46875V1.8125C11 1.67188 10.9297 1.53125 10.8359 1.41406C10.7188 1.32031 10.5781 1.25 10.4375 1.25H7.8125L7.60156 0.804688C7.55469 0.710938 7.48438 0.640625 7.39062 0.59375C7.29688 0.546875 7.17969 0.5 7.08594 0.5H4.41406C4.29688 0.5 4.20312 0.546875 4.10938 0.59375C4.01562 0.640625 3.94531 0.710938 3.89844 0.804688L3.6875 1.25H1.0625C0.898438 1.25 0.757812 1.32031 0.664062 1.41406C0.546875 1.53125 0.5 1.67188 0.5 1.8125V2.46875ZM10.25 3.78125C10.25 3.71094 10.2031 3.64062 10.1562 3.59375C10.1094 3.54688 10.0391 3.5 9.96875 3.5H1.53125C1.4375 3.5 1.36719 3.54688 1.32031 3.59375C1.27344 3.64062 1.25 3.71094 1.25 3.78125V11.375C1.25 11.7031 1.34375 11.9609 1.57812 12.1719C1.78906 12.4062 2.04688 12.5 2.375 12.5H9.125C9.42969 12.5 9.6875 12.4062 9.92188 12.1719C10.1328 11.9609 10.25 11.7031 10.25 11.375V3.78125ZM3.875 5.375V10.625C3.875 10.7422 3.82812 10.8359 3.75781 10.9062C3.6875 10.9766 3.59375 11 3.5 11C3.38281 11 3.28906 10.9766 3.21875 10.9062C3.14844 10.8359 3.125 10.7422 3.125 10.625V5.375C3.125 5.28125 3.14844 5.1875 3.21875 5.11719C3.28906 5.04688 3.38281 5 3.5 5C3.59375 5 3.6875 5.04688 3.75781 5.11719C3.82812 5.1875 3.875 5.28125 3.875 5.375ZM6.125 5.375V10.625C6.125 10.7422 6.07812 10.8359 6.00781 10.9062C5.9375 10.9766 5.84375 11 5.75 11C5.63281 11 5.53906 10.9766 5.46875 10.9062C5.39844 10.8359 5.375 10.7422 5.375 10.625V5.375C5.375 5.28125 5.39844 5.1875 5.46875 5.11719C5.53906 5.04688 5.63281 5 5.75 5C5.84375 5 5.9375 5.04688 6.00781 5.11719C6.07812 5.1875 6.125 5.28125 6.125 5.375ZM8.375 5.375V10.625C8.375 10.7422 8.32812 10.8359 8.25781 10.9062C8.1875 10.9766 8.09375 11 8 11C7.88281 11 7.78906 10.9766 7.71875 10.9062C7.64844 10.8359 7.625 10.7422 7.625 10.625V5.375C7.625 5.28125 7.64844 5.1875 7.71875 5.11719C7.78906 5.04688 7.88281 5 8 5C8.09375 5 8.1875 5.04688 8.25781 5.11719C8.32812 5.1875 8.375 5.28125 8.375 5.375Z"
        fill="#4A4A4A"
      />
    </Svg>
  );
};

export const CommentIcon = props => {
  return (
    <Svg
      width={props.width || 43}
      height={props.height || 43}
      viewBox="0 0 43 43"
      fill="none"
      {...props}>
      <Path
        d="M36.8213 0.5C38.2158 0.5 39.4463 1.07422 40.5127 2.05859C41.4971 3.125 42.0713 4.35547 42.0713 5.75V29.375C42.0713 30.8516 41.4971 32.082 40.5127 33.0664C39.4463 34.1328 38.2158 34.625 36.8213 34.625H25.0088L14.7549 42.3359C14.5908 42.5 14.3447 42.5 14.0986 42.5C13.8525 42.5 13.6064 42.418 13.4424 42.2539C13.2783 42.0898 13.1963 41.8438 13.1963 41.5156V34.625H5.32129C3.84473 34.625 2.61426 34.1328 1.62988 33.0664C0.563477 32.082 0.0712891 30.8516 0.0712891 29.375V5.75C0.0712891 4.35547 0.563477 3.125 1.62988 2.05859C2.61426 1.07422 3.84473 0.5 5.32129 0.5H36.8213ZM39.4463 29.375V5.75C39.4463 5.09375 39.1182 4.4375 38.626 3.94531C38.1338 3.45312 37.4775 3.125 36.8213 3.125H5.32129C4.58301 3.125 3.92676 3.45312 3.43457 3.94531C2.94238 4.4375 2.69629 5.09375 2.69629 5.75V29.375C2.69629 30.1133 2.94238 30.7695 3.43457 31.2617C3.92676 31.7539 4.58301 32 5.32129 32H15.8213V38.2344L24.1064 32H36.8213C37.4775 32 38.1338 31.7539 38.626 31.2617C39.1182 30.7695 39.4463 30.1133 39.4463 29.375Z"
        fill="#606770"
      />
    </Svg>
  );
};