import relativePathFromFullPath from './relativePathFromFullPaths';


describe('relativePathFromFullPaths()', () => {
    it('should return empty string', () => {
        const source = '/one/two/three';
        const dest = '/one/two/three';

        expect(relativePathFromFullPath(source, dest)).toBe('');
    });

    it('should return "three"', () => {
        const source = '/one/two';
        const dest = '/one/two/three';

        expect(relativePathFromFullPath(source, dest)).toBe('three');
    });

    it('should return "../three"', () => {
        const source = '/one/two/three';
        const dest = '/one/two';

        expect(relativePathFromFullPath(source, dest)).toBe('..');
    });

    it('should return "../four"', () => {
        const source = '/one/two/three';
        const dest = '/one/two/four';

        expect(relativePathFromFullPath(source, dest)).toBe('../four');
    });
});