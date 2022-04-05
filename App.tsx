import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { Scanner } from './src/components/Scanner';

import { styles } from './src/styles/App.styles';

export type onScanProps = { data: string; type: string };

export default function App() {
	const [scannerIsOpened, setScannerIsOpened] = React.useState(false);

	function onScan({ data, type }: onScanProps) {
		setScannerIsOpened(false);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.appTitle}>Code Scanner App</Text>

			<Pressable
				onPress={() => setScannerIsOpened((state) => !state)}
				style={styles.buttonOpenScanner}
			>
				<Text style={styles.buttonOpenScannerText}>
					{scannerIsOpened ? 'Fechar' : 'Abrir'} Scanner
				</Text>
			</Pressable>

			{scannerIsOpened && <Scanner onScan={onScan} />}

			<StatusBar style="auto" />
		</View>
	);
}
