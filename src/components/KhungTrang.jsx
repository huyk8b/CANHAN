import React from 'react';
import ThanhDauTrang from './ThanhDauTrang';
import ChanTrang from './ChanTrang';

export function KhungTrang(props) {
  return (
    <div className="khung-trang">
      <ThanhDauTrang />
      <main className="noi-dung">
        {props.children}
      </main>
      <ChanTrang />
    </div>
  );
}

export default KhungTrang;
