import { colors } from './index';
import { StyleSheet } from 'react-native';

const sizes = {
    image: 36,
};

export default StyleSheet.create({
    contentView: {
        borderRadius: 8,
        flex: 1,
        width: '100%',
        padding: 20,
        margin: 10,
        backgroundColor: colors.contentBackground,
        minHeight: 400,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageWrapper: {
        overflow: 'hidden',
        height: sizes.image,
        width: sizes.image,
        borderColor: colors.themeColor,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: (sizes.image + 2) / 2,
        alignSelf: 'center',
        backgroundColor: colors.imageBackground,
    },
    titleWrapper: {
        borderRadius: 8,
        flexDirection: 'row',
        // width: '100%',
        backgroundColor: colors.wrapperBackground,
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    wrapper: {
        borderStyle: 'solid',
        borderColor: colors.themeColor,
        borderWidth: 2,
        width: '100%',
        padding: 10,
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: colors.wrapperBackground,
    },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    left: {
        paddingRight: 10,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    right: { flexDirection: 'column', flex: 1 },
    h1: { fontSize: 36 },
    h2: {
        fontSize: 20,
    },
    h3: { fontSize: 16 },
    h4: { fontSize: 14 },
    normal: { fontSize: 12 },
    win: { color: 'green', fontWeight: '500' },
    loss: { color: 'red', fontWeight: '500' },
});
