import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Alert,
} from 'react-native';
import Header from '../../components/Header';
import AvatarPicker from '../../components/AvatarPicker';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ICONS, COLORS, SPACING } from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';

const RegisterEnterpriseScreen: React.FC = () => {
	const [imageUri, setImageUri] = useState<string | null>(null);
	const [companyName, setCompanyName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [loading, setLoading] = useState(false);

	const validate = () => {
		if (!companyName.trim()) return 'Digite o nome da empresa.';
		if (!phone.trim()) return 'Digite o telefone.';
		if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'E-mail inválido.';
		if (!password || password.length < 6) return 'Senha deve ter pelo menos 6 caracteres.';
		if (!cnpj.trim()) return 'Digite o CNPJ.';
		return null;
	};

	const handleSubmit = async () => {
		const err = validate();
		if (err) {
			Alert.alert('Atenção', err);
			return;
		}

		setLoading(true);
		try {
			const payload = { companyName, phone, email, password, cnpj, imageUri };
			console.log('Register enterprise payload:', payload);
			Alert.alert('Sucesso', 'Cadastro empresarial realizado (simulado).');
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Erro ao cadastrar.';
			Alert.alert('Erro', message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<Header title="HireUp" subtitle="Configure seu perfil empresarial" showBackButton />

			<ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
				<AvatarPicker imageUri={imageUri} onImageSelected={(uri) => setImageUri(uri)} size={96} />

				<View style={styles.form}>
					<Input
						placeholder="Digite o nome da empresa"
						leftIcon={ICONS.briefcase as keyof typeof Ionicons.glyphMap}
						value={companyName}
						onChangeText={setCompanyName}
						autoCorrect={false}
					/>

					<Input
						placeholder="Telefone"
						leftIcon={ICONS.phone as keyof typeof Ionicons.glyphMap}
						value={phone}
						onChangeText={setPhone}
						keyboardType="phone-pad"
					/>

					<Input
						placeholder="E-mail"
						leftIcon={ICONS.mail as keyof typeof Ionicons.glyphMap}
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
					/>

					<Input
						placeholder="Senha"
						leftIcon={ICONS.lock as keyof typeof Ionicons.glyphMap}
						value={password}
						onChangeText={setPassword}
						isPassword
					/>

					<Input
						placeholder="CNPJ"
						leftIcon={ICONS.id as keyof typeof Ionicons.glyphMap}
						value={cnpj}
						onChangeText={setCnpj}
						keyboardType="numeric"
					/>

					<View style={styles.cta}>
						<Button title="Cadastrar" onPress={handleSubmit} loading={loading} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: SPACING.lg,
		alignItems: 'center',
		backgroundColor: COLORS.surfaceSecondary,
		paddingBottom: SPACING.xxl,
	},
	form: {
		width: '100%',
		marginTop: SPACING.md,
	},
	cta: {
		marginTop: SPACING.lg,
	},
});

export default RegisterEnterpriseScreen;

