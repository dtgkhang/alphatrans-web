// pages/tools.tsx (Trang công cụ)
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ProcedureItem {
  id: number;
  product: string;
  description: string;
}

interface PriceItem {
  province: string;
  district: string;
  weight: string;
  price: string;
}

const mockProcedures: ProcedureItem[] = [
  {
    id: 1,
    product: 'Thức ăn chăn nuôi',
    description: 'Công bố lưu hành, luật chăn nuôi, điều 41. Kiểm tra chất lượng, điều 13.',
  },
  {
    id: 2,
    product: 'Thiết bị điện tử',
    description: 'Khai báo hải quan, kiểm tra chất lượng, điều 25. Chứng nhận hợp chuẩn, điều 12.',
  },
  {
    id: 3,
    product: 'Hàng dệt may',
    description: 'Kiểm tra nhãn mác, điều 15. Công bố hợp quy, luật dệt may, điều 30.',
  },
  // Data mẫu ngắn
];

const mockPrices: PriceItem[] = [
  { province: 'HCM', district: 'QUẬN 2', weight: '1TAN', price: '500 VND' },
  { province: 'HCM', district: 'QUẬN 2', weight: '1.8TAN', price: '500 VND' },
  { province: 'HCM', district: 'QUẬN 2', weight: '5TAN', price: '1.300.000 VND' },
  { province: 'HCM', district: 'QUẬN 2', weight: '8TAN', price: '1.700.000 VND' },
  { province: 'HCM', district: 'QUẬN 2', weight: '10TAN', price: '2.000.000 VND' },
  { province: 'HCM', district: 'QUẬN 1', weight: '1TAN', price: '500 VND' },
  { province: 'HCM', district: 'QUẬN 1', weight: '1.8TAN', price: '550 VND' },
  { province: 'HCM', district: 'QUẬN 1', weight: '5TAN', price: '1.500.000 VND' },
  { province: 'HCM', district: 'QUẬN 1', weight: '8TAN', price: '2.000.000 VND' },
  { province: 'HCM', district: 'QUẬN 1', weight: '10TAN', price: '2.300.000 VND' },
  { province: 'HCM', district: 'QUẬN 4', weight: '1TAN', price: '550 VND' },
  { province: 'HCM', district: 'QUẬN 4', weight: '1.8TAN', price: '600 VND' },
  { province: 'HCM', district: 'QUẬN 4', weight: '5TAN', price: '1.500.000 VND' },
  { province: 'HCM', district: 'QUẬN 4', weight: '8TAN', price: '2.000.000 VND' },
  { province: 'HCM', district: 'QUẬN 4', weight: '10TAN', price: '2.000.000 VND' },
  { province: 'HCM', district: 'QUẬN 3', weight: '1TAN', price: '600 VND' },
  { province: 'HCM', district: 'QUẬN 3', weight: '1.8TAN', price: '600 VND' },
  { province: 'HCM', district: 'QUẬN 3', weight: '5TAN', price: '1.600.000 VND' },
  { province: 'HCM', district: 'QUẬN 3', weight: '8TAN', price: '2000 VND' },
  { province: 'HCM', district: 'QUẬN 3', weight: '10TAN', price: '2500 VND' },
  { province: 'HCM', district: 'BÌNH TÂN', weight: '1TAN', price: '600 VND' },
  { province: 'HCM', district: 'BÌNH TÂN', weight: '1.8TAN', price: '650 VND' },
  { province: 'HCM', district: 'BÌNH TÂN', weight: '5TAN', price: '1.600.000 VND' },
  { province: 'HCM', district: 'BÌNH TÂN', weight: '8TAN', price: '2000 VND' },
  { province: 'HCM', district: 'BÌNH TÂN', weight: '10TAN', price: '2500 VND' },
  { province: 'HCM', district: 'BÌNH CHÁNH', weight: '1TAN', price: '650 VND' },
  { province: 'HCM', district: 'BÌNH CHÁNH', weight: '1.8TAN', price: '700 VND' },
  { province: 'HCM', district: 'BÌNH CHÁNH', weight: '5TAN', price: '1.600.000 VND' },
  { province: 'HCM', district: 'BÌNH CHÁNH', weight: '8TAN', price: '2000 VND' },
  { province: 'HCM', district: 'BÌNH CHÁNH', weight: '10TAN', price: '2500 VND' },
  { province: 'HCM', district: 'HÓC MÔN', weight: '1TAN', price: '700 VND' },
  { province: 'HCM', district: 'HÓC MÔN', weight: '1.8TAN', price: '750 VND' },
  { province: 'HCM', district: 'HÓC MÔN', weight: '5TAN', price: '1.500.000 VND' },
  { province: 'HCM', district: 'HÓC MÔN', weight: '8TAN', price: '2000 VND' },
  { province: 'HCM', district: 'HÓC MÔN', weight: '10TAN', price: '2500 VND' },
  { province: 'HCM', district: 'CỦ CHI', weight: '1TAN', price: '800 VND' },
  { province: 'HCM', district: 'CỦ CHI', weight: '1.8TAN', price: '850 VND' },
  { province: 'HCM', district: 'CỦ CHI', weight: '5TAN', price: '1.700.000 VND' },
  { province: 'HCM', district: 'CỦ CHI', weight: '8TAN', price: '2200 VND' },
  { province: 'HCM', district: 'CỦ CHI', weight: '10TAN', price: '2700 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'TRẢNG BÀNG', weight: '1TAN', price: '1.200.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'TRẢNG BÀNG', weight: '1.8TAN', price: '1.300.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'TRẢNG BÀNG', weight: '5TAN', price: '2.200.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'TRẢNG BÀNG', weight: '8TAN', price: '2.700.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'TRẢNG BÀNG', weight: '10TAN', price: '3.200.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'GÒ DẦU', weight: '1TAN', price: '1.400.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'GÒ DẦU', weight: '1.8TAN', price: '1.600.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'GÒ DẦU', weight: '5TAN', price: '2.400.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'GÒ DẦU', weight: '8TAN', price: '3.00.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'GÒ DẦU', weight: '10TAN', price: '3.300.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'CHÂU THÀNH', weight: '1TAN', price: '1.700.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'CHÂU THÀNH', weight: '1.8TAN', price: '1.900.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'CHÂU THÀNH', weight: '5TAN', price: '2.900.000 VND' },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'CHÂU THÀNH', weight: '8TAN', price: "3.300'000 VND" },
  { province: 'TÂY NINH - CÁT LÁI ( NGƯỢC LẠI)', district: 'CHÂU THÀNH', weight: '10TAN', price: '3.700.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'BIÊN HÒA', weight: '1TAN', price: '600 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'BIÊN HÒA', weight: '1.8TAN', price: '650 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'BIÊN HÒA', weight: '5TAN', price: '1.500.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'BIÊN HòA', weight: '8TAN', price: '2.00.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'BIÊN HòA', weight: '10TAN', price: '2.300.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'SÔNG MÂY', weight: '1TAN', price: '800 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'SÔNG MÂY', weight: '1.8TAN', price: '850 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'SÔNG MÂY', weight: '5TAN', price: '1.800.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', district: 'SÔNG MÂY', weight: '8TAN', price: '2.200.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÔNG MÂY', 'weight': '10TAN', 'price': '2.700.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG THÀNH', 'weight': '1TAN', 'price': '750 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG THÀNH', 'weight': '1.8TAN', 'price': '900 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG THÀNH', 'weight': '5TAN', 'price': '1.700.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG THÀNH', 'weight': '8TAN', 'price': '2.100.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG THÀNH', 'weight': '10TAN', 'price': '2500 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN PHÚ MỸ', 'weight': '1TAN', 'price': '1200 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN PHÚ MỸ', 'weight': '1.8TAN', 'price': '1300 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN PHÚ MỸ', 'weight': '5TAN', 'price': '2.200.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN PHÚ MỸ', 'weight': '8TAN', 'price': '2.700.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN PHÚ MỸ', 'weight': '10TAN', 'price': '3.000.000 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BÀ RỊA', 'weight': '1TAN', 'price': '1400 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BÀ RỊA', 'weight': '1.8TAN', 'price': '1500 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BÀ RỊA', 'weight': '5TAN', 'price': '2400 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BÀ RỊA', 'weight': '8TAN', 'price': '2900 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BÀ RỊA', 'weight': '10TAN', 'price': '3200 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'VŨNG TÀU', 'weight': '1TAN', 'price': '1600 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'VŨNG TÀU', 'weight': '1.8TAN', 'price': '1700 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'VŨNG TÀU', 'weight': '5TAN', 'price': '2700 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'VŨNG TÀU', 'weight': '8TAN', 'price': '3200 VND' },
  { province: 'ĐỒNG NAI - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'VŨNG TÀU', 'weight': '10TAN', 'price': '3500 VND' },
  { province: 'BÌNH DƯƠNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÓNG THẦN 1-2', 'weight': '1TAN', 'price': '600 VND' },
  { province: 'BÌNH DƯƠNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÓNG THẦN 1-2', 'weight': '1.8TAN', 'price': '650 VND' },
  { province: 'BÌNH DƯƠNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÓNG THẦN 1-2', 'weight': '5TAN', 'price': '1500 VND' },
  { province: 'BÌNH DƯƠNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÓNG THẦN 1-2', 'weight': '8TAN', 'price': '2000 VND' },
  { province: 'BÌNH DƯƠNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'SÓNG THẦN 1-2', 'weight': '10TAN', 'price': '2500 VND' },
  // ... (Thêm dữ liệu còn lại tương tự, tôi giữ ngắn để code gọn; bạn có thể mở rộng)
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐỨC HÒA', 'weight': '1TAN', 'price': '800 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐỨC HÒA', 'weight': '1.8TAN', 'price': '850 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐỨC HÒA', 'weight': '5TAN', 'price': '1700 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐỨC HÒA', 'weight': '8TAN', 'price': '2200 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐỨC HÒA', 'weight': '10TAN', 'price': '2700 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN THUẬN ĐẠO', 'weight': '1TAN', 'price': '900 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN THUẬN ĐẠO', 'weight': '1.8TAN', 'price': '1000 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN THUẬN ĐẠO', 'weight': '5TAN', 'price': '1800 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN THUẬN ĐẠO', 'weight': '8TAN', 'price': '2300 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'KCN THUẬN ĐẠO', 'weight': '10TAN', 'price': '2800 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Tân Kim', 'weight': '1TAN', 'price': '700 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Tân Kim', 'weight': '1.8TAN', 'price': '750 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Tân Kim', 'weight': '5TAN', 'price': '1500 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Tân Kim', 'weight': '8TAN', 'price': '2000 VND' },
  { province: 'LONG AN - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Tân Kim', 'weight': '10TAN', 'price': '2500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MAZAGUI', 'weight': '1TAN', 'price': '2200 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MAZAGUI', 'weight': '1.8TAN', 'price': '2500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MAZAGUI', 'weight': '5TAN', 'price': '3700 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MAZAGUI', 'weight': '8TAN', 'price': '4500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MAZAGUI', 'weight': '10TAN', 'price': '5500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BAO LỘC', 'weight': '1TAN', 'price': '3000 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BAO LỘC', 'weight': '1.8TAN', 'price': '3500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BAO LỘC', 'weight': '5TAN', 'price': '4500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BAO LỘC', 'weight': '8TAN', 'price': '5500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BAO LỘC', 'weight': '10TAN', 'price': '7500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DI LINH', 'weight': '1TAN', 'price': '4200 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DI LINH', 'weight': '1.8TAN', 'price': '4500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DI LINH', 'weight': '5TAN', 'price': '5500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DI LINH', 'weight': '8TAN', 'price': '6500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DI LINH', 'weight': '10TAN', 'price': '7200 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DUC TRỌNG', 'weight': '1TAN', 'price': '4500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DUC TRỌNG', 'weight': '1.8TAN', 'price': '5000 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DUC TRỌNG', 'weight': '5TAN', 'price': '6200 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DUC TRỌNG', 'weight': '8TAN', 'price': '7000 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'DUC TRỌNG', 'weight': '10TAN', 'price': '7500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐÀ LẠT', 'weight': '1TAN', 'price': '5000 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐÀ LẠT', 'weight': '1.8TAN', 'price': '5500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐÀ LẠT', 'weight': '5TAN', 'price': '6700 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐÀ LẠT', 'weight': '8TAN', 'price': '7500 VND' },
  { province: 'LÂM ĐỒNG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'ĐÀ LẠT', 'weight': '10TAN', 'price': '8500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'GÒ CÔNG', 'weight': '1TAN', 'price': '1500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'GÒ CÔNG', 'weight': '1.8TAN', 'price': '1700 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'GÒ CÔNG', 'weight': '5TAN', 'price': '3500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'GÒ CÔNG', 'weight': '8TAN', 'price': '4500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'GÒ CÔNG', 'weight': '10TAN', 'price': '5000 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỸ THO', 'weight': '1TAN', 'price': '1400 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỸ THO', 'weight': '1.8TAN', 'price': '1600 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỸ THO', 'weight': '5TAN', 'price': '3200 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỸ THO', 'weight': '8TAN', 'price': '4000 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỸ THO', 'weight': '10TAN', 'price': '4500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI BÈ', 'weight': '1TAN', 'price': '1700 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI BÈ', 'weight': '1.8TAN', 'price': '1900 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI BÈ', 'weight': '5TAN', 'price': '3900 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI BÈ', 'weight': '8TAN', 'price': '5000 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI BÈ', 'weight': '10TAN', 'price': '5500 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CAI LẬY', 'weight': '1TAN', 'price': '1700 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CAI LẬY', 'weight': '1.8TAN', 'price': '1900 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CAI LẬY', 'weight': '5TAN', 'price': '3900 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CAI LẬY', 'weight': '8TAN', 'price': '5000 VND' },
  { province: 'TIỀN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CAI LẬY', 'weight': '10TAN', 'price': '5500 VND' },
  { province: 'HẬU GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': '', 'weight': '1TAN', 'price': '3000 VND' },
  { province: 'HẬU GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': '', 'weight': '1.8TAN', 'price': '3500 VND' },
  { province: 'HẬU GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': '', 'weight': '5TAN', 'price': '5500 VND' },
  { province: 'HẬU GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': '', 'weight': '8TAN', 'price': '7000 VND' },
  { province: 'HẬU GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': '', 'weight': '10TAN', 'price': '8000 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU ĐỐC', 'weight': '1TAN', 'price': '3800 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU ĐỐC', 'weight': '1.8TAN', 'price': '4300 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU ĐỐC', 'weight': '5TAN', 'price': '5500 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU ĐỐC', 'weight': '8TAN', 'price': '7000 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU ĐỐC', 'weight': '10TAN', 'price': '8000 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG XUYÊN', 'weight': '1TAN', 'price': '4000 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG XUYÊN', 'weight': '1.8TAN', 'price': '4500 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG XUYÊN', 'weight': '5TAN', 'price': '5700 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG XUYÊN', 'weight': '8TAN', 'price': '7300 VND' },
  { province: 'AN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'LONG XUYÊN', 'weight': '10TAN', 'price': '85009 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'RẠCH GIÁ', 'weight': '1TAN', 'price': '4000 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'RẠCH GIÁ', 'weight': '1.8TAN', 'price': '4500 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'RẠCH GIÁ', 'weight': '5TAN', 'price': '6000 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'RẠCH GIÁ', 'weight': '8TAN', 'price': '7500 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'RẠCH GIÁ', 'weight': '10TAN', 'price': '8500 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU THÀNH', 'weight': '1TAN', 'price': '4300 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU THÀNH', 'weight': '1.8TAN', 'price': '4700 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU THÀNH', 'weight': '5TAN', 'price': '6200 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU THÀNH', 'weight': '8TAN', 'price': '7700 VND' },
  { province: 'KIÊN GIANG - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CHÂU THÀNH', 'weight': '10TAN', 'price': '8700 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'weight': '1TAN', 'price': '1800 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'weight': '1.8TAN', 'price': '2200 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'weight': '5TAN', 'price': '4000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'weight': '8TAN', 'price': '5500 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'weight': '10TAN', 'price': '6000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÀY NAM', 'weight': '1TAN', 'price': '2300 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÀY NAM', 'weight': '1.8TAN', 'price': '3000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÀY NAM', 'weight': '5TAN', 'price': '4700 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÀY NAM', 'weight': '8TAN', 'price': '6000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÀY NAM', 'weight': '10TAN', 'price': '7000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÂY BẮC', 'weight': '1TAN', 'price': '2300 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÂY BẮC', 'weight': '1.8TAN', 'price': '3000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÂY BẮC', 'weight': '5TAN', 'price': '4700 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÂY BẮC', 'weight': '8TAN', 'price': '6000 VND' },
  { province: 'BẾN TRE - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'MỎ CÂY BẮC', 'weight': '10TAN', 'price': '7000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI RĂNG', 'weight': '1TAN', 'price': '3000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI RĂNG', 'weight': '1.8TAN', 'price': '3500 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI RĂNG', 'weight': '5TAN', 'price': '5300 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI RĂNG', 'weight': '8TAN', 'price': '7500 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'CÁI RĂNG', 'weight': '10TAN', 'price': '85000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'NINH KIỀU', 'weight': '1TAN', 'price': '2800 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'NINH KIỀU', 'weight': '1.8TAN', 'price': '3300 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'NINH KIỀU', 'weight': '5TAN', 'price': '5000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'NINH KIỀU', 'weight': '8TAN', 'price': '7000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'NINH KIỀU', 'weight': '10TAN', 'price': '8000 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Ô MÔN', 'weight': '1TAN', 'price': '2900 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Ô MÔN', 'weight': '1.8TAN', 'price': '3500 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Ô MÔN', 'weight': '5TAN', 'price': '5200 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Ô MÔN', 'weight': '8TAN', 'price': '7200 VND' },
  { province: 'CẦN THƠ - CÁT LÁI ( NGƯỢC LẠI)', 'district': 'Ô MÔN', 'weight': '10TAN', 'price': '8400 VND' },
  { province: 'BÌNH THUẬN', 'district': 'CÀ NÁ', 'weight': '1TAN', 'price': '3500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'CÀ NÁ', 'weight': '1.8TAN', 'price': '4000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'CÀ NÁ', 'weight': '5TAN', 'price': '5500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'CÀ NÁ', 'weight': '8TAN', 'price': '7500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'CÀ NÁ', 'weight': '10TAN', 'price': '8000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NINH THUẬN', 'weight': '1TAN', 'price': '4500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NINH THUẬN', 'weight': '1.8TAN', 'price': '5000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NINH THUẬN', 'weight': '5TAN', 'price': '6500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NINH THUẬN', 'weight': '8TAN', 'price': '8500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NINH THUẬN', 'weight': '10TAN', 'price': '9000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NHA TRANG', 'weight': '1TAN', 'price': '5500 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NHA TRANG', 'weight': '1.8TAN', 'price': '6000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NHA TRANG', 'weight': '5TAN', 'price': '9000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NHA TRANG', 'weight': '8TAN', 'price': '10000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'NHA TRANG', 'weight': '10TAN', 'price': '11000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'BÌNH ĐỊNH', 'weight': '1TAN', 'price': '9000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'BÌNH ĐỊNH', 'weight': '1.8TAN', 'price': '10000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'BÌNH ĐỊNH', 'weight': '5TAN', 'price': '12000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'BÌNH ĐỊNH', 'weight': '8TAN', 'price': '14000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'BÌNH ĐỊNH', 'weight': '10TAN', 'price': '15000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'QUÃNG NGÃI', 'weight': '1TAN', 'price': '10000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'QUÃNG NGÃI', 'weight': '1.8TAN', 'price': '11000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'QUÃNG NGÃI', 'weight': '5TAN', 'price': '14000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'QUÃNG NGÃI', 'weight': '8TAN', 'price': '16000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'QUÃNG NGÃI', 'weight': '10TAN', 'price': '17000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'ĐÀ NẴNG', 'weight': '1TAN', 'price': '110000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'ĐÀ NẴNG', 'weight': '1.8TAN', 'price': '12000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'ĐÀ NẴNG', 'weight': '5TAN', 'price': '15000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'ĐÀ NẴNG', 'weight': '8TAN', 'price': '17000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'ĐÀ NẴNG', 'weight': '10TAN', 'price': '18000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'GIA LAI', 'weight': '1TAN', 'price': '9000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'GIA LAI', 'weight': '1.8TAN', 'price': '10000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'GIA LAI', 'weight': '5TAN', 'price': '12000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'GIA LAI', 'weight': '8TAN', 'price': '15000 VND' },
  { province: 'BÌNH THUẬN', 'district': 'GIA LAI', 'weight': '10TAN', 'price': '' },
  // Thêm dữ liệu còn lại nếu cần, hiện giữ ngắn
];

const ToolsPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState('customs'); // 'customs' hoặc 'price'

  // Tool 1: Tra cứu thủ tục hải quan
  const [searchTermCustoms, setSearchTermCustoms] = useState('');
  const [searchResultsCustoms, setSearchResultsCustoms] = useState<ProcedureItem[]>([]);

  const handleSearchCustoms = (term: string) => {
    setSearchTermCustoms(term);
    if (term.trim() === '') {
      setSearchResultsCustoms([]);
      return;
    }
    const results = mockProcedures.filter((item) =>
      item.product.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResultsCustoms(results);
  };

  // Tool 2: Check giá vận chuyển
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [weight, setWeight] = useState('');
  const [priceResult, setPriceResult] = useState<string | null>(null);

  const handleSearchPrice = () => {
    const result = mockPrices.find(
      (item) =>
        item.province.toLowerCase() === province.toLowerCase() &&
        item.district.toLowerCase() === district.toLowerCase() &&
        item.weight === weight
    );
    setPriceResult(result ? result.price : 'Không tìm thấy giá phù hợp.');
  };

  const provinces = [...new Set(mockPrices.map((item) => item.province))];
  const districts = [...new Set(mockPrices.filter((item) => item.province === province).map((item) => item.district))];
  const weights = [...new Set(mockPrices.map((item) => item.weight))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-[#1976d1] text-center mb-8">Công Cụ Hỗ Trợ</h1>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTool('customs')}
            className={`px-6 py-3 rounded-l-lg ${activeTool === 'customs' ? 'bg-[#1976d1] text-white' : 'bg-gray-200 text-[#2c2d3f]'}`}
          >
            Tra cứu hải quan
          </button>
          <button
            onClick={() => setActiveTool('price')}
            className={`px-6 py-3 rounded-r-lg ${activeTool === 'price' ? 'bg-[#1976d1] text-white' : 'bg-gray-200 text-[#2c2d3f]'}`}
          >
            Check giá vận chuyển
          </button>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md min-h-[300px]">
          {activeTool === 'customs' ? (
            <>
              <label className="block text-lg font-bold text-[#2c2d3f] mb-4">Tìm kiếm sản phẩm:</label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm (ví dụ: Thức ăn chăn nuôi)"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976d1] transition-all duration-300 text-[#2c2d3f] font-medium"
                value={searchTermCustoms}
                onChange={(e) => handleSearchCustoms(e.target.value)}
              />
              <div className="min-h-[200px]">
                {searchResultsCustoms.length > 0 ? (
                  <table className="w-full mt-8 border-collapse">
                    <thead>
                      <tr className="bg-[#1f1f2e] text-white">
                        <th className="p-3 text-left font-bold">Sản phẩm</th>
                        <th className="p-3 text-left font-bold">Mô tả thủ tục</th>
                        <th className="p-3 text-left font-bold">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResultsCustoms.map((result) => (
                        <tr key={result.id} className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-300">
                          <td className="p-3 font-bold text-[#1976d1]">{result.product}</td>
                          <td className="p-3 text-[#2c2d3f] font-medium">{result.description}</td>
                          <td className="p-3">
                            <a
                              href={`/tools/detail/${result.id}`}
                              className="bg-[#1976d1] text-white px-4 py-2 rounded-md hover:bg-[#1565c0] transition-all duration-300"
                            >
                              Xem thêm
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : searchTermCustoms && (
                  <p className="mt-4 text-center text-gray-500 font-medium">Không tìm thấy kết quả phù hợp.</p>
                )}
              </div>
            </>
          ) : (
            <>
              <label className="block text-lg font-bold text-[#2c2d3f] mb-4">Tra cứu giá vận chuyển</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <label htmlFor="province-select" className="sr-only">Chọn tỉnh</label>
                <select
                  id="province-select"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976d1] transition-all duration-300"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Chọn tỉnh</option>
                  {provinces.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
                <label htmlFor="district-select" className="sr-only">Chọn quận/huyện</label>
                <select
                  id="district-select"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976d1] transition-all duration-300"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!province}
                >
                  <option value="">Chọn quận/huyện</option>
                  {districts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
                <label htmlFor="weight-select" className="sr-only">Chọn trọng tải</label>
                <select
                  id="weight-select"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976d1] transition-all duration-300"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                >
                  <option value="">Chọn trọng tải</option>
                  {weights.map((wt) => (
                    <option key={wt} value={wt}>
                      {wt}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSearchPrice}
                className="mt-4 bg-[#1976d1] text-white px-6 py-3 rounded-md hover:bg-[#1565c0] transition-all duration-300 w-full sm:w-auto"
              >
                Tra cứu giá
              </button>
              {priceResult && (
                <div className="mt-4 text-center">
                  <p className="text-[#2c2d3f] font-medium">Giá: {priceResult}</p>
                  <a
                    href="/contact"
                    className="mt-2 inline-block bg-[#2c2d3f] text-white px-6 py-3 rounded-md hover:bg-[#1a1a26] transition-all duration-300"
                  >
                    Nhận tư vấn ngay
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;