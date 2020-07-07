import cssModules from './Header.module.scss';

// {'hello': '2342sdfsfcsefr', stam: 'sdfasdf'}
export default function Header() {
    return (
        <header>
            <h1 className={cssModules.hello}>
                Hello im the header
            </h1>
        </header>
    )
}