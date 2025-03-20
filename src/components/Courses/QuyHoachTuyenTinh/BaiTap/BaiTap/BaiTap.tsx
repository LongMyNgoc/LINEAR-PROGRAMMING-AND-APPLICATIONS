import Chuong1 from "../TuLuan/Chuong1/Chuong1.tsx";
import Chuong2 from "../TuLuan/Chuong2/Chuong2.tsx";
import Chuong3 from "../TuLuan/Chuong3/Chuong3.tsx";
import Chuong4 from "../TuLuan/Chuong4/Chuong4.tsx";
import Chuong5 from "../TuLuan/Chuong5/Chuong5.tsx";
import TN1 from "../TracNghiem/Chuong1/TN1.tsx";
import TN2 from "../TracNghiem/Chuong2/TN2.tsx";
import TN3 from "../TracNghiem/Chuong3/TN3.tsx";
import TN4 from "../TracNghiem/Chuong4/TN4.tsx";
import TN5 from "../TracNghiem/Chuong5/TN5.tsx";

interface BaiTapRendererProps {
    selectedItem: string | null;
    setSelectedItem: (item: string | null) => void;
}

const BaiTapRenderer = ({ selectedItem, setSelectedItem }: BaiTapRendererProps) => {
    switch (selectedItem) {
        case "1.5": return <Chuong1 setSelectedItem={setSelectedItem} />;
        case "2.7": return <Chuong2 setSelectedItem={setSelectedItem}/>;
        case "3.3": return <Chuong3 setSelectedItem={setSelectedItem}/>;
        case "4.3": return <Chuong4 setSelectedItem={setSelectedItem}/>;
        case "4.7": return <Chuong5 setSelectedItem={setSelectedItem}/>;
        case "1.6": return <TN1 setSelectedItem={setSelectedItem} />;
        case "2.8": return <TN2 setSelectedItem={setSelectedItem} />;
        case "3.4": return <TN3 setSelectedItem={setSelectedItem} />;
        case "4.4": return <TN4 setSelectedItem={setSelectedItem} />;
        case "4.8": return <TN5 setSelectedItem={setSelectedItem} />;
        default: return null;
    }
};

export default BaiTapRenderer;
