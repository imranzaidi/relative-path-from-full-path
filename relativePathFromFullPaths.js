export default function relativePathFromFullPath(source, dest) {
    if (source === dest) return '';

    const sourceDirList = source.split('/');
    sourceDirList.shift();

    const destDirList = dest.split('/');
    destDirList.shift();

    const sourceIsDeeper = sourceDirList.length > destDirList.length;

    let diffIndex;

    const calculateDiffForSourceDeeperOrEqual = () => {
        diffIndex = destDirList.length;
        for (let i = 0; i < destDirList.length; i++) {
            if (destDirList[i] === sourceDirList[i]) continue;
            else {
                diffIndex = i;
                break;
            }
        }

        const goBackPath = Array(sourceDirList.length - diffIndex);
        goBackPath.fill('..');
        const missingDirs = destDirList.slice(diffIndex);

        return goBackPath.concat(missingDirs).join('/');
    }

    if (sourceIsDeeper) {
        return calculateDiffForSourceDeeperOrEqual();

    } else if (sourceDirList.length === destDirList.length) {
        return calculateDiffForSourceDeeperOrEqual();
    } else {
        diffIndex = sourceDirList.length;
        for (let i = 0; i < sourceDirList.length; i++) {
            if (sourceDirList[i] === destDirList[i]) continue;
            else {
                diffIndex = i;
                break;
            }
        }

        const goBackPath = Array(sourceDirList.length - diffIndex);
        goBackPath.fill('..');
        const missingDirs = destDirList.slice(diffIndex);

        return goBackPath.concat(missingDirs).join('/');
    }
}