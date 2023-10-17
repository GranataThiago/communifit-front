import React from 'react';

const InsertCodeStep = ({code, setCode}: {code: string[], setCode: any}) => {

  const handlePaste = (e: any) => {
    e.preventDefault();
    const clipboardData = e.clipboardData.getData('text');
    const digits = clipboardData.substring(0, 4);

    let newCode = [...code];
    digits.split('').forEach((digit: string, index: number) => {
        if((!Number(digit) && Number(digit) !== 0) && digit !== '' ){
            return;
        }
      if (index < 4) {
        newCode[index] = digit;
      }
    });
    setCode(newCode);
  };

  const handleChangeCode = (index: number, newValue: string) => {
    if(newValue.length>=1){
      newValue = newValue.slice(0, 1);
    }
    if((!Number(newValue) && Number(newValue) !== 0) && newValue !== '' ){
        return;
    }
    let newCode = [...code];
    newCode[index] = newValue;
    setCode(newCode);
  };


  return (
    <div className="flex flex-row w-full items-center justify-center gap-3">
      {code.map((value, index) => (
        <div key={index} className="flex items-center justify-center text-center">
          <input
            type="text"
            className="w-[80px] h-[80px] text-5xl rounded-xl border-2 border-gray-300 text-center"
            value={value}
            onPaste={handlePaste}
            onChange={(e) => handleChangeCode(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default InsertCodeStep;
