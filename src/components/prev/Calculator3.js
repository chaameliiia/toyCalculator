이전 작업물
const Calculator = () => {
  const [btnText, setBtnText] = useState('');
  const [result, setResult] = useState(0);
  const operand = useRef('');
  const calArr = [];
  const numArr = [];
  let textContent, idx; 
  const bln = useRef(false);

  const calculate = (a, b, oper) => {
    switch(oper) {
      case '+':
        result.current = a + b;
        break;
      case '-':
        result.current = a - b;
        break;
      case '*':
        result.current = a * b;
        break;
      case '/':
        result.current = a / b;
        break;
      default: break;
    }
    return result
  };

  const extract = () => {
    numArr.push(btnText.split(/[^0-9]/g)); // 숫자 추출 123, 4
    for(let i = 0; i < btnText.length; i++) { // 연산자 추출 1, 2, 3, *, 4
      calArr.push(btnText.split('')[i]);
    }
    calArr.map((v, i) => {
      if(isNaN(parseInt(v))) {
        idx = i;
      }
      return idx;
    });
    calculate(parseInt(numArr[0][0]), parseInt(numArr[0][1]), calArr[idx]);
  };

  const _clickNum = e => {
    e.preventDefault();
    bln.current = false;
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
  };

  const _clickSubmit = e => {
    e.preventDefault();
    bln.current = false;
    if(btnText === '') {
      return;
    }
    textContent = e.target.textContent;
    setBtnText(btnText + textContent);
    extract();
  };

  const _clickOper = e => { // calText, btnText 연산 실행
    e.preventDefault();
    let a = btnText;
    textContent = e.target.textContent;
    if(btnText === '') { // 연산할 숫자 없을 경우
      return;
    }
    if(operand.current === textContent) { // 같은 연산자 연속으로 누른 경우
      return;
    }
    if(bln.current) {
      a = a.slice(0, a.length - 1);
    }
    console.log(a.slice(0, a.length - 1));
    operand.current = textContent;
    a += textContent;
    setBtnText(a);
    bln.current = true;
    extract();
  };

  const _clickFunc = e => {
    e.preventDefault();

    const clearing = () => {
      setBtnText('');
      result.current = 0;
    };

    const erasing = () => {
      setBtnText(btnText.slice(0, btnText.length - 1));
    };

    switch(e.target.className) {
      case 'clear':
        clearing();
        break;

      case 'erase':
        erasing();
        break;

      default: return;
    }
  };
};

export default Calculator;